<template>
  <div id="headquarters">
    Puedes encontrarnos aquí
    <GmapMap
  :center="{lat:40.301769, lng:-3.442696}"
  :zoom="14"
  map-type-id="roadmap"
  style="width: 90%; height: 280px"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
</GmapMap>
  </div>
</template>

<script>

export default {
  name: 'headquarters',
  data: function(){
    return {
      markers: [{position: {lat:40.301769, lng:-3.442696}}]
    }
  }
}
</script>

<style>
#headquarters{
  text-align: center;
}
#headquarters .vue-map-container .vue-map {
  left: 20px;
}

@media screen and (min-width: 321px) {
  .vue-map {;
  }
}
</style>
