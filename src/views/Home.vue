<template>
  <div>
    Redirecting...
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$router.push('/GeekyADAMS?tab=repositories')
  }
}
</script>
