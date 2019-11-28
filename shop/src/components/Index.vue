<template>
  <div id="Index">
    <b-message type="is-info" has-icon>
      INICIA SESIÓN PARA HACER TU RESERVA ONLINE
    </b-message>
    <transition name="fade">
      <img v-if="showImg" class="indexImg img1" :src="require(`@/assets/img/cupcake.jpg`)" alt="Imagen de Pretzel" >
    </transition>
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
  },
  created(){
    // setTimeout(()=> this.showImg = false , 2500)//This makes it dissapear after 2.5 secs
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to  {
  opacity: 0;
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
