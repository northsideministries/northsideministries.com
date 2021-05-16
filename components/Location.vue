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
      <div class="mapboxgl-canvas h-full" v-if="access_token !== ''">
        <client-only>
          <MglMap
            :accessToken="access_token"
            :mapStyle="map_style"
            :center="coordinates"
            :zoom="15"
            class="w-full h-full mt-4"
          >
            <MglMarker :coordinates="coordinates" color="red" />
          </MglMap>
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
      coordinates: [],
    }
  },
  mounted() {
    this.$content('site', 'mapbox').fetch()
      .then(res => {
        this.livestream_list = res.livestream_list
        this.access_token = res.access_token
        this.map_style = res.map_style
        this.coordinates = [parseFloat(res.lat), parseFloat(res.long)]
      })
  }
}
</script>