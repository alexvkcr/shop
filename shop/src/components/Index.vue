<template>
  <div id="Index">
    <b-message title="Danger" type="is-danger" aria-close-label="Close message">
            Cuidado, los productos de esta tienda tienen sabores altamente adictivos 
    </b-message>
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
  display: inline-block;
  width: 80vw;
  height: 20vh;
  margin-left: 12%;
  padding: 0 3em;
  padding-right: auto;
  animation-duration: 1s;
  animation-name: slidein;
}
article.message{
  display: inline-block;
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
    margin-left: 12%;
    padding: 0 3em;
    padding-right: auto;
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
