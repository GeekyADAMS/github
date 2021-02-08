<template>
  <div class="profile w-screen">
    <div class="w-full prenav-space"></div>
    <Navtab class=""/>

    <div class="w-full h-screen flex-row-between">
      <ProfileDetails />
      
      <main>
        <Repositories />
      </main>
    </div>
  </div>
</template>

<script>
import Navtab from '@/components/Profile/Navtab'
import ProfileDetails from '@/components/Profile/Profile-details'
import Repositories from '@/components/Profile/Repositories'

export default {
  components: {
    Navtab,
    ProfileDetails,
    Repositories
  },
  mounted () {
    // const navtab = this.$refs.navtab

    // window.addEventListener("scroll", function() {
    //   let nav_top = navtab.getBoundingClientRect().top
    //   let window_top = window.scrollTop
    //   if (window_top > nav_top) {
    //     // when the scrolnavigationl's y is bigger than the nav's y set class to fixednav
    //     navtab.classList.add("fixedtop")
    //     navtab.classList.remove('static')
    //   } else { // Overwise set the class to staticnav
    //     navtab.classList.add("static")
    //     navtab.classList.remove('fixedtop')
    //   }
    // })
  }
}
</script>

<style scoped>
.prenav-space {
  height: 1rem;
}

main {
  flex-grow: 1;
  margin-right:6rem;
}
</style>