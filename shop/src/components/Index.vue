<template>
  <div id="Index">
    <img class="indexImg img1" :src="require(`@/assets/img/pretzel.jpg`)" alt="Imagen de Pretzel" >
  </div>
</template>

<script>

export default {
  name: 'Index'
}
</script>

<style>
#Index {  
  display: block;
  overflow-x: hidden;
}
.indexImg{
  display: inline-block;
  width: 80vw;
  height: 20vh;
  margin: auto auto auto 12%;
  padding: 0 3em;
  animation-duration: 1s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100vw;
  }

  to {
    margin: auto auto auto 12%;
    background: white;
  }
}


@media screen and (min-width: 490px) {
  .indexImg{
    display: block;
    width: 15vw;
    height: 15vw;
    margin: auto auto auto 12%;
  }
  @keyframes slidein {
    from {
      margin-left: 100vw;
    }
    to {
      background: linear-gradient(140deg, #ffffff, #ffffff, #ffffff);
      margin: auto auto auto 12%;
    }
  }
  
}
</style>
