<template>
  <nav class="nav w-screen flex-row-between-centered">
    <div id="left-nav-section" class="nav__left center-align-row">
      <img src="~@/assets/images/brand/github-logo.png" class="nav__logo fade-hover" width="40px" alt="Github logo">

      <div class="nav__search  center-align-row">
        <input type="text" class="nav__search__input" placeholder="Search or jump to...">
        <img src="~@/assets/images/icons/search-key-slash.svg" class="nav__search__icon" alt="Search key">
      </div>

      <div class="nav__list">
        <ul class="center-align-row font-bold">
          <li v-for="(item, index) in navListItems" :key="index" class="fade-hover">
            {{item.title}}
          </li>
        </ul>
      </div>
    </div>

    <div id="left-nav-section" class="nav__right center-align-row">
      <div class="flex-row fade-hover">
        <octicon name="bell" />
        <div class="nav__right__circle rounded-full"></div>
      </div>

      <div class="center-align-row fade-hover">
        <octicon name="plus" class="mr-p3"/>
        <octicon name="triangle-down" scale=".8" />
      </div>

      <div class="center-align-row fade-hover">
        <img src="~@/assets/images/pictures/default-profile-avi.png" class="nav__right__avi mr-p3 rounded-full" width="20px" alt="Profile AVI">
        <octicon name="triangle-down" scale=".8" />
      </div>
      
    </div>
  </nav>
</template>

<script>
import Octicon from 'vue-octicon/components/Octicon.vue'

export default {
  data() {
    return {
      navListItems: [
        { title: 'Pull requests', page: '/' },
        { title: 'Issues', page: '/' },
        { title: 'Marketplace', page: '/' },
        { title: 'Explore', page: '/' },
      ]
    }
  },
  components: {
    Octicon
  }
}
</script>

<style scoped>
.nav {
  background: var(--github-dark);
  padding: .5rem 2rem;
  color: var(--github-light);
  box-sizing: border-box;
}

.nav__logo {
  margin-right: .7rem;
}

.nav__search {
  border: var(--light-border);
  border-radius: 5px;
  overflow: hidden;
}

.nav__search__input {
  background: transparent;
  padding: .4rem 1rem .5rem 1rem;
  width: 13rem;
  border: none;
  outline: none;
  color: var(--brand-white);
}
.nav__search__input::placeholder {
  color: var(--github-light);
  opacity: .7;
}
.nav__search__input:focus {
  border: none;
  outline: none
}

.nav__search__icon {
  margin-right: .5rem;
}

.nav__list{
  margin-left: -1rem;
}
li {
  list-style-type: none;
  margin-right: 1rem;
  font-size: var(--text-small);
}

.nav__right > div {
  margin-right: 1rem;
}

.nav__right__circle {
  width: 8px;
  height: 8px;
  margin: -.15rem 0 0 -.45rem;
  background: var(--github-link-blue);
}
</style>
