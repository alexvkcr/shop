<template>
  <div id="Index">
    <b-message type="is-info" has-icon>
      INICIA SESIÓN PARA HACER TU RESERVA ONLINE
    </b-message>
    <img class="indexImg img1" :src="require(`@/assets/img/cupcake.jpg`)" alt="Imagen de Cupcake" >
    <img class="indexCherry img2" :src="require(`@/assets/img/cherry.gif`)" alt="Imagen de Cereza" >
    <span>La mejor bollería de todo Arganda</span>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data: ()=>{
    return {
      showImg: true
      }
  }
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
  animation-duration: 1.33s;
  animation-name: slidein;
}
.indexCherry{
  position: absolute;
  top: 200px;
  left: 830px;
  width: 280px;
  height: 220px;
  animation-duration: 3s;
  animation-name: dropping;
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
@keyframes dropping {
  from {
    top: -200px;
  }
  50%{
    top: -200px;
  }
  to {  
    top: 200px;
  }
}

@media screen and (min-width: 490px) {
  .indexImg{
    display: block;
    width: 20vw;
    height: 20vw;
    margin-left: 35%;
    padding: 0 3em;
    padding-right: auto;
  }
  @keyframes slidein {
    from {
      margin-left: 100vw;
    }
    to{
      background: linear-gradient(140deg, #ffffff, #ffffff, #ffffff);
      margin: auto auto auto 33%;
    }
  }
  
}
</style>
