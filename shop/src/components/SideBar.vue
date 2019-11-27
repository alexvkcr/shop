<template>
  <div id="SideBar">
    <b-menu>
      <b-menu-list label="Menú">
        <div class="category">
          <b-button tag="router-link" to="/" v-bind:type="{'is-success': atHome}">Inicio</b-button>
        </div>
        <div class="category">
          <b-button tag="router-link" to="/items" v-bind:type="{'is-success': atItems}">Artículos</b-button>
        </div>
        <div class="category">
          <b-button tag="router-link" to="/headquarters" v-bind:type="{'is-success': atHeadquarters}">Dónde estamos</b-button>
        </div>
      </b-menu-list>
    </b-menu>
    <button @click="hideSideBar()" type="button" class="modal-close is-large botonCerrar"></button>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  methods: {
    clickMe() {// eslint-disable-next-line
      console.log("Clicked!!");
    },
    hideSideBar(){
      let sideBar = document.querySelector('#SideBar')
      sideBar.style.display = 'none'
      //Next create a modal div that overlays everything and acts as a touchable sidebar
    }
  },
  computed: {
    atHome(){ return this.$route.path == "/"},
    atItems(){ return this.$route.path == "/items"},
    atHeadquarters(){ return this.$route.path == "/headquarters"}
  }
};
</script>

<style>
#SideBar {
  display: none;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.6); /* Black w/ opacity */
}
.menu{
  padding-top: 15vh; 
  background-color: #fefefe;
  border: 1px solid #888;
  width: 80%;
  height:100%;
}
.menu .menu-label{
  padding-left: 3vw;
}
.category{
  margin: 1vh 10vw 0 5vw;
  overflow-x: hidden;
}
.botonCerrar{
  display:unset;
}

@media screen and (min-width: 490px) {
  #SideBar {
    display: unset;
    padding: 1px 10px;
    position: unset; /* Stay in place */
    z-index: unset; /* Sit on top */
    padding-top: unset; /* Location of the box */
    background-color: unset; /* Black w/ opacity */
    width:unset;
  }
  .menu{
    background-color: unset;
    border: unset;
    width: unset;
  }
  .menu .menu-label{
    padding-left: unset;
  }
  .category{
    margin: 1vh;
    overflow-x: hidden;
  }

  div .menu-list a{
    padding: 0.5em 0.1em;
    font-size: 1rem;
  }
  button.botonCerrar{
    display: none;
  }
}
</style>
