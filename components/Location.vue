<template>
  <div class="location">
    <div>
      <h4>Address</h4>
      <address class="mt-2">
        <p>7800 Northside Drive</p>
        <p>North Charleston, SC 29420</p>
      </address>
    </div>
    <div class="mt-6">
      <h4>Map</h4>
      <div
        class="mapboxgl-canvas mt-2"
        id="map-wrap"
        v-if="access_token !== ''"
      >
        <!-- Mapbox -->
        <!-- <client-only>
          <MglMap
            :accessToken="access_token"
            :mapStyle="map_style"
            :center="coordinates"
            :zoom="15"
            class="w-full h-full mt-4"
          >
            <MglMarker :coordinates="coordinates" color="red" />
          </MglMap>
        </client-only> -->

        <!-- Leaflet -->
        <client-only>
          <l-map :zoom="17" :center="coordinates">
            <l-tile-layer
              :url="
                `https://api.mapbox.com/styles/v1/mapbox/${map_style}/tiles/{z}/{x}/{y}?access_token=${access_token}`
              "
            ></l-tile-layer>
            <!-- <l-tile-layer
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            ></l-tile-layer> -->
            <l-marker :lat-lng="coordinates"></l-marker>
          </l-map>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Location',
  data() {
    return {
      access_token: '',
      map_style: '',
      coordinates: []
    }
  },
  mounted() {
    this.$content('dev', 'mapbox')
      .fetch()
      .then(res => {
        this.livestream_list = res.livestream_list
        this.access_token = res.access_token
        this.map_style = res.map_style
        this.coordinates = [parseFloat(res.long), parseFloat(res.lat)]
      })
  }
}
</script>
