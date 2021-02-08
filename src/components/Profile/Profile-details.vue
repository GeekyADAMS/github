<template>
  <section class="profile__details flex-col">
    <img class="profile__details__avi" src="~@/assets/images/pictures/default-profile-avi.png">

    <div class="profile__details_deet">
      <h1 class="font-bold x2large-text fade-9 lineheight-0 mb-1p5">Adams Abdulhakeem</h1>
      <p class="font-light large-text fade-6 lineheight-0 profile__details__username">GeekyADAMS</p>

      <p class="font-light profile__details__decription mt-2">Software Developer</p>

      <div class="w-full profile__details__action flex-row-between">
        <button class="btn--light profile__details__action__follow">Follow</button>
        <button class="btn--light profile__details__action__more">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
        </button>
      </div>

      <div class="w-full profile__details__stats center-align-row">
        <div class="center-align-row mt-1p5 mr-p5 link-hover">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="mr-p3 font-light fade-4"><path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path></svg>
          <span class="xsmall-text fade-8"><strong>0 </strong>followers</span>
        </div>
        <span class="mr-p5 mt-p5">.</span>
        <div class="center-align-row mt-1p5 mr-p5 link-hover">
          <span class="xsmall-text fade-8"><strong>0 </strong>following</span>
        </div>
        <span class="mr-p5 mt-p5">.</span>
        <div class="center-align-row mt-1p5 mr-p5 link-hover">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" class="mr-p3 font-light fade-4"><path fill-rule="evenodd" d="M12 .25a.75.75 0 01.673.418l3.058 6.197 6.839.994a.75.75 0 01.415 1.279l-4.948 4.823 1.168 6.811a.75.75 0 01-1.088.791L12 18.347l-6.117 3.216a.75.75 0 01-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 01.416-1.28l6.838-.993L11.328.668A.75.75 0 0112 .25zm0 2.445L9.44 7.882a.75.75 0 01-.565.41l-5.725.832 4.143 4.038a.75.75 0 01.215.664l-.978 5.702 5.121-2.692a.75.75 0 01.698 0l5.12 2.692-.977-5.702a.75.75 0 01.215-.664l4.143-4.038-5.725-.831a.75.75 0 01-.565-.41L12 2.694z"></path></svg>
          <span class="xsmall-text fade-8"><strong>2 </strong>stars</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style scoped>
.profile__details {
  width: 28.5%;
  height: 100vh;
  padding-left: 4rem;
  box-sizing: border-box;
}

.profile__details__avi {
  width: 18.5rem;
  height: 18.5rem;
  border-radius: 100%;
  margin-top: -2rem;
  z-index: 10;
}

.profile__details_deet {
  width: 18.5rem;
  margin-top: 1.5rem;
}

.btn--light{
  font-size: var(--text-small);
}
.profile__details__action__follow {
  padding: 8px;
  flex-grow: 1;
  margin-right: .6rem;
}
.profile__details__action__more {
  padding: 8px 12px 4px 12px;
}
</style>