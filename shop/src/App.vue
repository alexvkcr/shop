<template>
  <div id="app">
    <div class="header">header</div>
    <aside class="sidebar">side
      <ul>
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/items">Artículos</router-link></li>
      </ul>
    </aside>
    <div class="main">main<router-view></router-view></div>
    <footer class="footer">footer</footer>
  </div>
</template>


<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  display: grid; /*son bloques, con inline-grid es un grid que no pega saltos de linea*/
  grid-template-columns: 150px 100%;
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
