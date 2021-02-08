<template>
  <div class="repo w-full h-screen flex-grow">
    <div class="searchbar w-full flex-row box-border border-bottom-light">
      <input type="text" class="searchbar__input flex-grow border-light box-border mr-1" placeholder="Find a repository...">

      <button class="searchbar__input__typefilter center-align-row btn--light mr-1">
        <p class="mr-p5 font-light small-text"><span class="font-light fade-6">Type: </span>All</p>
        <octicon name="triangle-down" scale=".6" />
      </button>

      <button class="searchbar__input__typefilter center-align-row btn--light">
        <p class="mr-p5 font-light small-text"><span class="font-light fade-6">Language: </span>All</p>
        <octicon name="triangle-down" scale=".6" />
      </button>
    </div>

    <RepositoryCard />
  </div>
</template>

<script>
import Octicon from 'vue-octicon/components/Octicon.vue'
import RepositoryCard from '@/components/Profile/Repositories/Repo-card'

export default {
  components: {
    Octicon,
    RepositoryCard
  }
}
</script>

<style scoped>
.searchbar {
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

.searchbar > button {
  padding: .5rem .7rem;
  height: 2.1rem;
}
</style>
