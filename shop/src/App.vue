<template>
  <div id="app">
    <side-bar class="side-bar"></side-bar>
    <div class="main">main<router-view></router-view></div>
    <app-footer class="footer"></app-footer>
  </div>
</template>


<script>

import AppHeader from './components/AppHeader.vue'
import SideBar from './components/SideBar.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'app',
  components: {
    AppHeader, SideBar, AppFooter
  }
}
</script>

<style>
#app {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  display: grid; /*son bloques, con inline-grid es un grid que no pega saltos de linea*/
  grid-template-columns: 100%;
  grid-template-rows: 10vh 65vh 25vh;
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
  overflow-y:auto;
  padding: 10px;
}
.footer{
  grid-area: footer;
  padding: 3rem 1rem 1rem !important;
}
@media screen and (min-width: 490px) {
  #app {
    grid-template-columns: 150px calc(100% - 150px);
    grid-template-rows: 10vh 65vh 25vh;
    grid-template-areas: 
      "header header"
      "sidebar main"
      "footer footer";
  }
}
</style>
