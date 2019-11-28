<template>
  <div id="ItemPage">
    <h2 class="titleItem">{{thing.name}}</h2>
    <div class="itemContent">
      <img class="imgLarge" :src="require(`@/assets/${thing.img}`)" :alt="`Imagen de ${thing.name}`" >
      <p class="textItem">{{ thing.description }}</p>
      <p class="textItem">{{ thing.price }}</p>
    </div>
  </div>
</template>

<script>
import ShopConstants from '../App'

const axios = require('axios');

export default {
  name: 'ItemPage',
  data:()=> {
    return {
      itemId: Number,
      thing: {
        id: String,
        name: String,
        description: String,
        allergens: {
          type: Array,
          required: true,
          default: [],
          validator: allergens => (!Array.isArray(allergens)) ? false : ! allergens.some(it => typeof(it)!='string')
        },
        price: Number,
        img: String
        }
    }
  },
  beforeCreated () {
    this.itemId = this.$route.params.itemId 
  },
  created () {
    axios
      .get(ShopConstants.API_ITEM+this.itemId  || `http://localhost:3000/item/${this.itemId}`)
      .then(response => (this.thing= response.data.msg))
  },
  methods:{

  }
}
</script>

<style>
#ItemPage {
  
}
.imgLarge{
  width: 100%;
  max-width: 400px;
  margin: 10px auto;
}
.titleItem{
  font-weight: bold;
  font-size: 20px;
  margin: 10px auto;
  margin-left: 45%
}
.itemContent{
  display: flex;
  flex-direction: column;
  height: 100%;
}
.textItem{
  margin: 10px auto 0 40px;
}

@media screen and (min-width: 490px) { 
  #ItemPage{
    padding-left: calc(50% - 280px)
  }
  .titleItem{
    margin: 10px 0 40px 40px;
  }
  .imgLarge{
    margin: 10px auto auto 0;
  }
}
</style>
