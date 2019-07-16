<template>
  <div id="app">
    <app-header class="header"></app-header>
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

import AppHeader from './components/AppHeader.vue'

export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style>
#app {
  position: absolute;
  left: 0;
  top: 0;

  display: grid; /*son bloques, con inline-grid es un grid que no pega saltos de linea*/
  grid-template-columns: 100%;
  grid-template-areas: 
    "header"
    "main"
    "footer";
}
.header{
  width: 100vw;
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
@media screen and (min-width: 490px) {
  #app {
    grid-template-columns: 150px 100%;
    grid-template-areas: 
      "header header"
      "sidebar main"
      "footer footer";
  }
}
</style>
