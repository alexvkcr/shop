<template>
  <footer id="AppFooter">
    <div class="empresa">
      <p>Tienda de comida</p>
      <p>GUAU</p>
    </div>
    <div class="autor">
      <p>Autor: Alejandro Díaz</p>
      <p v-on:click="openTwitter()">
        <b-icon icon="twitter" size="is-medium"></b-icon>@alex_vkcr
      </p>
    </div>
  </footer>
</template>

<script>

import BIcon from 'buefy'

export default {
  name: "AppFooter",
  components: {
    BIcon
  },
  methods: {
    openTwitter() {
      window.open("https://www.twitter.com/alex_vkcr");
    }
  }
};
</script>

<style>
#AppFooter {
  display: grid; /*son bloques, con inline-grid es un grid que no pega saltos de linea*/
  grid-template-columns: calc(100% - 140px - 1rem)  140px;
  grid-template-areas: 
    "empresa autor";
  font-size: 0.8em;
}

.empresa {
  grid-area: empresa;
}

.autor {
  grid-area: autor;
}

@media screen and (min-width: 490px) {
  #AppFooter {
    grid-template-columns: calc(100% - 18rem)  140px;
  }
}
</style>
