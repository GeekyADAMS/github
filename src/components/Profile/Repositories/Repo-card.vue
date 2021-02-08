<template>
  <div class="card border-bottom-light lineheight-0 flex-row-between">
    <div class="card__info">
      <h3 class="card__info__repo-name link-blue space-1">core</h3>
      <span class="card__info__forked xsmall-text fade-6">
        Forked from dotnet/core
      </span>

      <p class="card__info__description small-text fade-8 font-light">
        Home repository for .NET Core
      </p>

      <div class="card__info__stat center-align-row">
        <div class="center-align-row mt-1p5 mr-2 link-hover">
          <div class="lang-identifier mr-p3"></div>
          <span class="xsmall-text font-light fade-8">Shell</span>
        </div>

        <div class="center-align-row mt-1p5 mr-2 link-hover">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" class="mr-p3"><path fill-rule="evenodd" d="M12 21a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zm-3.25-1.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zm-3-12.75a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM2.5 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zM18.25 6.5a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM15 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0z"></path><path fill-rule="evenodd" d="M6.5 7.75v1A2.25 2.25 0 008.75 11h6.5a2.25 2.25 0 002.25-2.25v-1H19v1a3.75 3.75 0 01-3.75 3.75h-6.5A3.75 3.75 0 015 8.75v-1h1.5z"></path><path fill-rule="evenodd" d="M11.25 16.25v-5h1.5v5h-1.5z"></path></svg>
          <span class="xsmall-text font-light fade-8">3,837</span>
        </div>

        <div class="center-align-row mt-1p5 mr-2 link-hover">
          <octicon name="law" scale="1.05" class="mr-p3 font-light fade-6" />
          <span class="xsmall-text font-light fade-8">Other</span>
        </div>

        <div class="center-align-row mt-1p5 mr-2 link-hover">
          <span class="xsmall-text font-light fade-8">Updated 7 days ago</span>
        </div>
      </div>
    </div>

    <div class="card_star-graph">
      <!-- <button class="searchbar__input__typefilter center-align-row btn--light mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill-rule="evenodd" d="M12 .25a.75.75 0 01.673.418l3.058 6.197 6.839.994a.75.75 0 01.415 1.279l-4.948 4.823 1.168 6.811a.75.75 0 01-1.088.791L12 18.347l-6.117 3.216a.75.75 0 01-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 01.416-1.28l6.838-.993L11.328.668A.75.75 0 0112 .25zm0 2.445L9.44 7.882a.75.75 0 01-.565.41l-5.725.832 4.143 4.038a.75.75 0 01.215.664l-.978 5.702 5.121-2.692a.75.75 0 01.698 0l5.12 2.692-.977-5.702a.75.75 0 01.215-.664l4.143-4.038-5.725-.831a.75.75 0 01-.565-.41L12 2.694z"></path></svg>
        <p class="ml-p5 font-light small-text">Star</p>
      </button> -->
    </div>
  </div>
</template>

<script>
import Octicon from 'vue-octicon/components/Octicon.vue'

export default {
  components: {
    Octicon
  }
}
</script>

<style scoped>
.card {
  padding: 1.5rem 0 1.4rem 0;
}

.card__info {
  width: 50%;
}

.card__info__description {
  margin-top: 1.5rem;
}

.lang-identifier {
  width: .7rem;
  height: .7rem;
  border-radius: 100%;
  background: rgb(96, 225, 32);
}

button {
  padding: .5rem .7rem;
  height: 1.7rem;
}
</style>
