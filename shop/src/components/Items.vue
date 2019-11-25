<template>
  <div id="Items">
      <item v-for="item in items" :key="item.id" :thing="item"></item>
  </div>
</template>

<script>
import ShopConstants from '../App'
import Item from './Item.vue'

const axios = require('axios');

export default {
  name: 'Items',
  components: {
    Item
  },
  data () {
    return {
      items: null
    }
  },
  beforeCreate () {
    axios
      .get(ShopConstants.API_ITEMS || "http://localhost:3000/items")
      .then(response => (this.items= response.data.msg))
  }
}
</script>

<style>
#Items {
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  padding: 10px;
}
@media screen and (min-width: 490px) {
  #Items {
    justify-content: space-around;
    margin-right: 2.15vw;
  }
}
</style>
