<template>
  <div class="profile flex-col w-screen relative">
    <div class="w-full prenav-space"></div>
    <vue-position-sticky @change="handleStickyChange">
      <Navtab :showNavProfile="showNavTabProfile"/>
    </vue-position-sticky>

    <div class="profile-body w-full flex-row-between">
      <ProfileDetails/>
      
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
import { mapActions } from 'vuex'


export default {
  data () {
    return {
      showNavTabProfile: false
    }
  },
  components: {
    Navtab,
    ProfileDetails,
    Repositories
  },
  computed: {
    user() {
      return this.$route.params.user
    }
  },
  methods: {
    ...mapActions([
      'fetchUserProfile',
      'fetchUserRepositories'
    ]),
    handleStickyChange() {
      this.showNavTabProfile = !this.showNavTabProfile
    }
  },
  created () {
    this.fetchUserProfile(this.user)
    this.fetchUserRepositories({
      user: this.user,
      page: this.$route.query.page || 1
    })
  },
  mounted () {
  }
}
</script>

<style scoped>
.profile {
  height: fit-content;
  align-items: center;
}
.prenav-space {
  height: 1rem;
}

main {
  flex-grow: 1;
  margin-right:6rem;
}

@media screen and (max-width: 640px) {
  .profile-body {
    flex-direction: column;
  }
}
</style>
