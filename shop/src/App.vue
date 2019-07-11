<template>
  <div id="app">
    <div class="header">header</div>
    <sidebar class="sidebar">side</sidebar>
    <div class="main">main</div>
    <footer class="footer">footer</footer>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
#app {
  display: grid; /*son bloques, con inline-grid es un grid que no pega saltos de linea*/
  grid-template-columns: 50px 100%;
  grid-template-areas: 
    "header header"
    "sidebar main"
    "footer footer";
}
.header{
  grid-area: header;
}
.sidebar{
  grid-area: sidebar;
}
.main{
  grid-area: main;
}
.footer{
  grid-area: footer;
}
</style>
