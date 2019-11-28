<template>
  <footer id="AppFooter">
    <div class="empresa">
      <p>Tienda de comida</p>
      <p>Bollería para llevar</p>
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

export default {
  name: "AppFooter",
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
  border-top: 0.2px #cacaca solid;
  background-color: #3bb78f;
  background-image: linear-gradient(315deg, #3bb78f 0%, #0bab64 74%);
}

.empresa {
  grid-area: empresa;
  color: #20644E;
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
