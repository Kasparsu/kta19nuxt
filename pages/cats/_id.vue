<template>
  <h1>This is wildcard</h1>
</template>

<script>
    export default {
      validate({ params }) {
        // Must be a number
        return /^\d+$/.test(params.id)
      }
    }
</script>

<style scoped>

</style>
