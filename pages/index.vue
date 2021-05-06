<template>
  <div>
    <g-map :lat="coords.lat" :lng="coords.lng" :zoom="myzoom"/>
    <v-btn @click="goToTPT">Go to school</v-btn>
  </div>
</template>

<script>

export default {
  data(){
    return {
      map: null,
      myzoom: 8,
      coords: {lat:-34.397, lng:150.644}
    }
  },
  methods: {
    goToTPT(){
      this.coords = {lat:59.4269337, lng:24.7428724};
      this.myzoom = 19;
    }
  }
}
</script>
<style scoped>
  #map {
    height: 600px;
  }
</style>
