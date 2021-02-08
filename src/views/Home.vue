<template>
  <div>
    Redirecting...
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$router.push('/Ghost')
  }
}
</script>
