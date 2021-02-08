<template>
  <div id="app">
    <Navbar />

    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Layouts/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
#app{
  padding: 0;
}
</style>
