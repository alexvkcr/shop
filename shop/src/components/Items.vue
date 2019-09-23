<template>
  <div id="items">
    Artículos (ya hay scroll)
    <p>{{ items }}</p>
  </div>
</template>

<script>
import ShopConstants from '../App'
const axios = require('axios');

export default {
  name: 'items',
  data () {
    return {
      items: null
    }
  },
  mounted () {
    axios
      .get(ShopConstants.API_ITEMS || "https://localhost:3000/items")
      .then(response => (this.items= response))
  }
}
</script>

<style>
#items {
}
</style>
