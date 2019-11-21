<template>
  <div id="Index">
    <b-message type="is-info" has-icon>
            INICIA SESIÓN PARA HACER TU RESERVA ONLINE
        </b-message>
    <img class="indexImg img1" :src="require(`@/assets/img/pretzel.jpg`)" alt="Imagen de Pretzel" >
    <span>La mejor bollería de todo Arganda</span>
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
#Index article.logged{
  display: none;
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
  display: block;
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
    width: 25vw;
    height: 20vw;
    margin-left: 33%;
    padding: 0 3em;
    padding-right: auto;
  }
  @keyframes slidein {
    from {
      margin-left: 100vw;
    }
    to {
      background: linear-gradient(140deg, #ffffff, #ffffff, #ffffff);
      margin: auto auto auto 40%;
    }
  }
  
}
</style>
