<template>
  <div id="Item" :item-id='thing.id'>
    <p class="title">{{ thing.name }}</p>
    <p>{{ thing.description }}</p>
    <ImgLoader :defaultImgUrl="'error.png'" :imgUrl="thing.img" />

    
    <b-tooltip class="allergies-icon"
      :label='thing.allergens.toString()'
      type="is-light"
      size="is-small"
      multilined>
      
      <b-icon
          icon="playlist-remove"
          size="is-medium">
      </b-icon>

    </b-tooltip>
  </div>
</template>

<script>
import ImgLoader from 'vue2-image-loader'

export default {
  name: 'Items',
  components:{
    ImgLoader
  },
  props: {
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
}
</script>

<style>
#Item {
  width: 20em;
  max-width: 80vw;
  background-color: #fafafa;  
  border-radius: 7%;
  margin:0 10px 10px; 
}
.title{
  margin: 5px unset 10px 10px;
}

.allergies-icon{
  margin: auto 5% auto 90%;
}
.b-tooltip.is-top.is-multiline.is-small:after{
  color: white; 
  background: #23d160;
}
</style>
