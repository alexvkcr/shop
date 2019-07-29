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
  </div>
</template>

<script>
export default {
  name: "SideBar",
  methods: {
    clickMe() {
      console.log("Clicked!!");
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
  padding: 1px 10px;
}

.category{
  margin: 1vh
}

div .menu-list a{
  padding: 0.5em 0.1em;
}

@media screen and (max-width: 490px) {
  #SideBar {
    display: none;
  }
}
</style>
