<template>
  <div id="AppHeader">
      <div class="icon-container">
      <b-icon     class="lateral-icon"
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
}
.icon-container{
  display: none;
}
.lateral-icon{
  margin: 1vh 1vw;
}

@media screen and (max-width: 490px) {
  .icon-container{
    display: unset;
  }
}
</style>
