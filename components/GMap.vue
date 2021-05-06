<template>
  <div ref="map" id="map"></div>
</template>

<script>
import {Loader} from "@googlemaps/js-api-loader";

export default {
  name: "GMap",
  props: ['lat', 'lng', 'zoom'],
  mounted(){
    const loader = new Loader({
      apiKey: "",
      version: "weekly",
    });
    loader.load().then(() => {
      this.map = new google.maps.Map(this.$refs['map'], {
        center: { lat: this.lat, lng: this.lng },
        zoom: this.zoom,
      });
    });
  },
  data: () => ({
    map: null
  }),
  watch: {
    zoom(val) {
      this.map.setZoom(val);
    },
    lat(val) {
      this.map.panTo({lat:val, lng:this.lng});
    },
    lng(val) {
      this.map.panTo({lat:this.lat, lng:val});
    },
  }
}
</script>

<style scoped>

</style>
