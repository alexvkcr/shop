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
    overflow-x: hidden;
}
.indexImg{
  display: block;
  width: 80vw;
  height: 20vh;
  margin: auto auto auto 12%;
  padding: 0 3em;
}
.img1{
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100vw;
  }
  30% {
    margin: auto auto auto 12%;
  }

  to {
    margin: auto auto auto 12%;
    background: white;
  }
}


@media screen and (min-width: 490px) {
  .indexImg{
    display: block;
    width: 30vw;
    height: 30vw;
    margin: auto auto auto 12%;
  }
  @keyframes slidein {
    from {
      margin-left: 100vw;
    }
    30% {
      margin: auto auto auto 12%;
    }

    to {
      margin: auto auto auto 12%;
      background: white;
    }
  }
  
}
</style>
