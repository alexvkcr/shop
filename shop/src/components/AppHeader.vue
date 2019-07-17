<template>
  <div id="AppHeader">
      <div class="icon-container">
      <b-icon   class="lateral-icon"
                icon="view-headline"
                size="is-medium">
            </b-icon></div>
      
    header
  </div>
</template>

<script>


export default {
  name: 'AppHeader'
}
</script>

<style>
#AppHeader {
  margin-top: 1vh;
  padding: 1vh 5vw;
  text-align: center;
}
.icon-container{
  display: none;
}
.lateral-icon{
  position: absolute;
  left: 10px;
}

@media screen and (max-width: 490px) {
  .icon-container{
    display: unset;
  }
}
</style>
