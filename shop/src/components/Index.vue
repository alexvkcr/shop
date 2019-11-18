<template>
  <div id="Index">
    <img class="img" :src="require(`@/assets/img/pretzel.jpg`)" alt="Imagen de Pretzel" >
  </div>
</template>

<script>

export default {
  name: 'Index'
}
</script>

<style>
#Index {  
}
.img{
  display: block;
  width: 80vw;
  margin: auto;
  padding: 0 3em;
  transform: scale(1.2,1.2);
  transition: transform 3s cubic-bezier(.19,1.95,.43,.48)
}
@media screen and (min-width: 490px) {
  .img{
    width: 60vw;
  }
}
</style>
