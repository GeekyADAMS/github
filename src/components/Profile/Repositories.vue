<template>
  <div class="repo w-full flex-grow" ref="repo">
    <div class="searchbar w-full flex-row box-border border-bottom-light">
      <input type="text" class="searchbar__input flex-grow border-light box-border mr-1" placeholder="Find a repository by name/language/description..." v-model="search_key">
      
      <div class="relative">
        <button class="searchbar__input__typefilter center-align-row btn--light mr-1" @click="showTypeFilter = true">
          <p class="mr-p5 font-light small-text"><span class="font-light fade-6">Type: </span>All</p>
          <octicon name="triangle-down" scale=".6" />
        </button>

        <div class="filter-modal border-light no-focus" v-show="showTypeFilter"
          @focusout="showTypeFilter = false"
          tabindex="0">
          <div class="w-full center-align-row xsmall-text font-bold px-p5 box-border">
            <p>Select type</p>
            <img src="@/assets/images/icons/close-black.png" alt="close" class="ml-auto cursor-pointer" width="10px" @click="showTypeFilter = false">
          </div>

          <div class="w-full center-align-row xsmall-text px-p5 box-border border-top-light fade-hover" v-for="(type, index) in typeOptions" :key="index" @click="filterReposByType(index)">
            <octicon name="check" class="mr-1" :class="{'fade-0': !type.active}"/>
            <p class="fade-8">{{type.title}}</p>
          </div>
        </div>
      </div>

      <button class="searchbar__input__langfilter center-align-row btn--light">
        <p class="mr-p5 font-light small-text"><span class="font-light fade-6">Language: </span>All</p>
        <octicon name="triangle-down" scale=".6" />
      </button>
    </div>

    <div class="filter-info w-full flex-row-between box-border border-bottom-light small-text" v-show="search_key || type_filter_key">
      <p class="w-fit"><strong>{{filteredRepos.length}}</strong> results for <strong v-show="type_filter_key">{{type_filter_key}}</strong> repositories <span v-show="search_key">matching <strong>{{search_key}}</strong></span></p>

      <div class="center-align-row fade-hover" @click="clearFilters">
        <img src="@/assets/images/icons/clear.png" class="mr-p5" width="20px" alt="x">
        <p>Clear filters</p>
      </div>
    </div>

    <div class="empty-info w-full flex-between no-wrap box-border border-bottom-light small-text" v-show="!repos.length">
      <p class="w-fit mx-auto"><strong>Nothing to display</strong></p>
    </div>

    <section class="repo_list flex-col t-w-full">
      <RepositoryCard :repo="repo" v-for="(repo, index) in filteredRepos" :key="index" />
    </section>


    <div class="repo__paginations w-full centered-row box-border mt-1 small-text">
      <button class="repo__paginations__previous center-align-row btn--light link-blue lineheight-0" :class="{'fade-4': pagination.backing}" :disabled="pagination.backing" @click="gotoPrevious">
        <p class="font-light small-text">Previous</p>
      </button>
      <button class="repo__paginations__next center-align-row btn--light link-blue lineheight-0" :class="{'fade-4': pagination.nexting}" :disabled="pagination.nexting" @click="gotoNext">
        <p class="font-light small-text">Next</p>
      </button>
    </div>
    
  </div>
</template>

<script>
import Octicon from 'vue-octicon/components/Octicon.vue'
import RepositoryCard from '@/components/Profile/Repositories/Repo-card'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      search_key: '',
      type_filter_key: '',
      showTypeFilter: false,
      pagination: {
        page: this.$route.query.page || 1,
        currentPage: this.$route.query.page || 1,
        backing: false,
        nexting: false
      },
      typeOptions: [
        { title: 'All', value: '', active: true },
        { title: 'Forks', value: 'fork', active: false },
        { title: 'Mirrors', vaue: 'mirror_url', active: false },
        { title: 'Archived', value: 'archived', active: false }
      ]
    }
  },
  components: {
    Octicon,
    RepositoryCard
  },
  computed: {
    repos () {
      return this.$store.getters.repos
    },
    repo_count () {
      return this.$store.getters.user.public_repos
    },
    filteredRepos () {
      let search_results = []
      search_results = this.repos.filter(repo => {
        let repo_name = repo.name.toLowerCase()
        let repo_lang = repo.language.toLowerCase()
        let repo_description = repo.description.toLowerCase()
        return repo_name.match(this.search_key.toLowerCase()) ||
              repo_lang.match(this.search_key.toLowerCase()) ||
              repo_description.match(this.search_key.toLowerCase())
      })

      const type_key = this.type_filter_key

      if (type_key) {
        search_results = search_results.filter(repo => {
          return repo[type_key]
        })
      }

      return search_results
    },
    numOfPages() {
      return this.repo_count / 20
    },
    user() {
      return this.$route.params.user
    }
  },
  methods: {
    ...mapActions([
      'fetchUserRepositories'
    ]),
    clearFilters() {
      this.search_key = ''
      this.type_filter_key = ''
      this.typeOptions.map(type => type.active = false)
      this.typeOptions[0].active = true
    },
    async gotoPrevious() {
      let currentPage = parseInt(this.pagination.page)
      if (currentPage > 1) {
        this.pagination.backing = true
        await this.fetchUserRepositories({
                user: this.$route.params.user,
                page: currentPage - 1
              })
        this.updateRoute(this.$route.params.user, currentPage - 1)
        this.pagination.page = currentPage - 1
        this.pagination.backing = false
      }
    },
    async gotoNext() {
      let currentPage = parseInt(this.pagination.page)
      if (currentPage < this.numOfPages) {
        this.pagination.nexting = true
        await this.fetchUserRepositories({
                user: this.$route.params.user,
                page: currentPage + 1
              })
        this.updateRoute(this.$route.params.user, currentPage + 1)
        this.pagination.page = currentPage + 1
        this.pagination.nexting = false
      }
    },
    updateRoute(username, page) {
      this.$router.push({
        path: `/${username}`,
        query: {
          tab: 'repositores',
          page
        }
      })

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    filterReposByType(index) {
      this.typeOptions.map(type => type.active = false)
      this.typeOptions[index].active = true

      this.showTypeFilter = false

      this.type_filter_key = this.typeOptions[index].value
    }
  },
   watch: {
    '$route'() {
      this.fetchUserRepositories({
        user: this.$route.params.user,
        page: this.$route.query.page
      })
    }
  }
}
</script>

<style scoped>
.repo {
  margin-left: 1.5rem;
}

.searchbar, .filter-info, .empty-info, .repo__paginations {
  padding: .8rem 0;
}

.searchbar__input {
  padding: .5rem .5rem;
  border-radius: 8px;
  font-size: var(--text-small);
  height: 2.3rem;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
}

.searchbar__input::placeholder {
  opacity: .85;
  font-weight: lighter;
}
.searchbar__input:focus {
  outline: none;
  border: 2.5px solid rgb(142, 183, 230);
}

.searchbar > button, .searchbar > div > button {
  padding: .5rem .7rem;
  height: 2.1rem;
}

.repo__paginations > button {
  padding: .2rem .8rem;
}
.repo__paginations__previous {
  border-radius: 10px 0 0 10px;
}
.repo__paginations__next {
  border-radius: 0 10px 10px 0;
}

.filter-modal {
  width: 19rem; 
  height: auto; 
  position: absolute; 
  top: 2.5rem; 
  right: 1rem;
  background: white;
  box-shadow: 0 0 20px rgba(0,0,0,.07);
  z-index: 500;
}

@media screen and (max-width: 640px) {
  .repo {
    width: 93vw;
  }

  .searchbar {
    margin-top: 3rem;
  }

  .searchbar, .filter-info, .empty-info, .repo__paginations {
    flex-wrap: wrap;
  }

  .searchbar > button, .searchbar > div > button {
    margin-top: .5rem;
    height: fit-content;
  }

  .searchbar__input {
    width: 100%;
  }

  .repo_list {
    margin-right: 1rem;
  }

  .filter-modal {
    left: 0;
  }
}
</style>
