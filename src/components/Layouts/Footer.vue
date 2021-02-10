<template>
  <footer class="footer flex-row-between-centered border-top-light xsmall-text">
    <p class="copyright fade-6">&copy; 2021 GitHub, Inc.</p>

    <div class="footer__list link-blue">
      <ul class="center-align-row">
        <li v-for="(item, index) in leftFooterItems" :key="index" class="fade-hover ll">
          {{item.title}}
        </li>
      </ul>
    </div>

    <img src="@/assets/images/brand/github-logo-black.png" alt="github logo" width="32px" class="fade-6 sm-hide">

    <div class="footer__list link-blue">
      <ul class="center-align-row">
        <li v-for="(item, index) in rightFooterItems" :key="index" class="fade-hover lr">
          {{item.title}}
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      leftFooterItems: [
        { title: 'Terms', page: '/' },
        { title: 'Privacy', page: '/' },
        { title: 'Security', page: '/' },
        { title: 'Status', page: '/' },
        { title: 'Docs', page: '/' },
      ],
      rightFooterItems: [
        { title: 'Contact Github', page: '/' },
        { title: 'Pricing', page: '/' },
        { title: 'API', page: '/' },
        { title: 'Explore', page: '/' },
        { title: 'Training', page: '/' },
        { title: 'Blog', page: '/' },
        { title: 'About', page: '/' },
      ]
    }
  },
  components: {
  },
  computed: {
  }
}
</script>

<style scoped>
footer {
  padding: 1.5rem 0 2rem 0;
  margin: 3rem 3rem 0 3rem;
  align-self: center;
  width: 95%;
}

li {
  list-style-type: none;
}
.ll {
  margin-right: 3rem;
}
.lr {
  margin-left: 3rem;
}

</style>
