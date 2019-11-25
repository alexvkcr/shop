<template>
  <div id="Headquarters">
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
        @click="center=m.position">
      </GmapMarker>
    </GmapMap>
    <p class="enhanced">Aquí es donde debes recoger tus pedidos</p>
    <p class="enhanced bigger">Estaremos encantados de atenderte</p>
  </div>
</template>

<script>

export default {
  name: 'Headquarters',
  data: ()=>{
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

.enhanced{
  font-weight: bold;
  font-size: 16px;
  margin: 10px;
}

.bigger{
  font-size: 20px;
}
</style>
