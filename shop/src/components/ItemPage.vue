<template>
  <div id="ItemPage">
    <h2 class="titleItem">{{thing.name}}</h2>
    <div class="itemContent">
      <img class="imgLarge" :src="require(`@/assets/${this.thing.img}`)" :alt="`Imagen de ${thing.name}`" >
      <div class="textItem">
        <p>{{ thing.description }}</p>
        <p>{{ thing.price }}€</p>
      </div>
      <b-button @click="logUserState"
                class="cartButton"
                icon-left="cart"
                size="is-medium"
                type="is-success"
                outlined>
        Añadir al carro
      </b-button>
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
        img: 'error.png'
        }
    }
  },
  created () {
    this.itemId = this.$route.params.itemId 
    axios
      .get((ShopConstants.API_ITEM  || `http://localhost:3000/item/` )+this.itemId)
      .then(response => (this.thing= response.data.msg))
  },
  methods:{
    logUserState(){
      console.log('prev')
      this.$emit('send-log')
    }
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
}
.itemContent{
  display: flex;
  flex-direction: column;
  height: 100%;
}

.textItem{
  font-size: 16px;
}
.cartButton{
  margin: auto;
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
  .textItem{
    margin: 10px auto 0 40px;
  }
}
</style>
