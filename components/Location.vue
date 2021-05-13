<template>
  <section class="location">
    <div>
      <h4>Address</h4>
      <!-- TODO: export address to CMS -->
      <address class="mt-2">
        <p>7800 Northside Drive</p>
        <p>North Charleston, SC 29420</p>
      </address>
    </div>
    <div>
      <h4>Map</h4>
      <div class="mapboxgl-canvas">
        <client-only>
          <MglMap
            :accessToken="accessToken"
            :mapStyle="mapStyle"
            :center="coordinates"
            :zoom="15"
            class="w-full h-64 mt-4"
          >
            <MglMarker :coordinates="coordinates" color="red" />
          </MglMap>
        </client-only>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Location',
  data() {
    return {
      // TODO: add tokens and map stuff to CMS
      accessToken:
        'pk.eyJ1Ijoibm9ydGhzaWRlbWluaXN0cmllcyIsImEiOiJja29razhlbDcwMGZjMnZvMTE4NWdjenJ5In0.wHLp8LbvYojXOQHLRbYhPA', // public token
      mapStyle: 'mapbox://styles/mapbox/streets-v11',
      coordinates: [-80.0546347220587, 32.94422911353373],
    }
  }
}
</script>

<style lang="postcss" scoped>
.location > div {
  @apply mt-6;
}
</style>