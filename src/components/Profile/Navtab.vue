<template>
  <div id="navtab" class="navtab w-full flex-row" ref="navtab">
    <div class="navtab__profile center-align-row">
      <img src="~@/assets/images/pictures/default-profile-avi.png" class="navtab__profile__avi mr-p5 rounded-full" width="32px" alt="Profile AVI">

      <div class="flex_col">
        <p class="font-bold lineheight-0 small-text">Bayonle</p>
        <button class="btn--light mt--p5">Follow</button>
      </div>
    </div>

    <div class="navtab__list">
      <ul class="center-align-row font-bold">
        <li v-for="(item, index) in navTabItems" :key="index" class="center-align-row cursor-pointer box-border" :class="{'font-light li__inactive': !item.active, 'li__active': item.active}" @click="switchTab(index)">
          <octicon :name="item.icon" class="mr-p5" :class="{'fade-4': !item.active}"/>
          <span class="mr-p5">{{item.title}}</span>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Octicon from 'vue-octicon/components/Octicon.vue'

export default {
  components: {
    Octicon
  },
  data() {
    return {
      navTabItems: [
        { title: 'Overview', tab: '', icon: 'book', active: false },
        { title: 'Repositories', tab: 'repositories', icon: 'repo', active: true },
        { title: 'Projects', tab: 'projects', icon: 'server', active: false },
        { title: 'Packages', tab: 'packages', icon: 'package', active: false },
      ]
    }
  },
  methods: {
    switchTab(index) {
      const tabItems = this.navTabItems
      tabItems.map(item => {
        item.active = false
      })
      tabItems[index].active = true

      if (!tabItems[index].tab) {
        return this.$router.replace(`${this.$route.path}`)
      }

      this.$router.replace(`${this.$route.path}?tab=${tabItems[index].tab}`)
    }
  }
}
</script>

<style scoped>
.navtab {
  border-bottom: .5px solid rgba(0, 0, 0, .1);
  padding-bottom: 0;
  height: fit-content;
  box-sizing: border-box;
  z-index: 5;
}
.navtab__profile {
  margin: 1px 0 -.8rem 4rem;
}

.btn--light {
  padding: 2px 6px;
}

.navtab__list{
  margin-left: 12rem;
  margin-top: auto;
  margin-bottom: -1rem;
}

li {
  list-style-type: none;
  margin-bottom: 0;
  padding: 0 1rem;
  height: 3rem;
  font-size: var(--text-small);
}

.li__active {
  border-bottom: 2px solid var(--github-red);
}
.li__inactive:hover {
  border-bottom: 2px solid rgba(0, 0, 0, .1);
}
</style>
