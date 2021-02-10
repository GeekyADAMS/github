<template>
  <div id="app">
    <Navbar />

    <main>
      <router-view/>
    </main>

    <flash-Notif />

    <Footer />
  </div>

</template>

<script>
import Navbar from '@/components/Layouts/Navbar.vue'
import Footer from '@/components/Layouts/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
#app{
  padding: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
}
</style>
