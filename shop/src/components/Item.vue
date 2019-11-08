<template>
  <div id="Item" :item-id='thing.id' 
    @mouseover="mouseIn(thing.id)"
    @mouseleave="mouseOut(thing.id)">
    <p class="title">{{ thing.name }}</p>
    <img v-img="{title: thing.name}" :src="require(`@/assets/${thing.img}`)" :alt="`Imagen de ${thing.name}`" >
    <p class="description">{{ thing.description }}</p>

    
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

export default {
  name: 'Items',
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
    },
    data(){
      img_amplified: false;//It'll be used to set wheather it'll need expansion or not
    },
    methods:{
      mouseIn(id){// eslint-disable-next-line
        console.log('in '+ id)
        setTimeout(this.expand,5000)
      },
      mouseOut(id){// eslint-disable-next-line
        console.log('out '+ id)
      },
      expand(){
        let img = document.querySelector('img')// eslint-disable-next-line
        console.log(img.width)
      }

    }
}
</script>

<style>
#Item {
  width: 20em;
  max-width: 70vw;
  background-color: #fafafa;  
  border-radius: 7%;
  border: 1px solid #ededed;
  margin:0 10px 10px; 
}
.title{
  text-align: center;
  margin: 5px unset 10px 10px;
}

img{
  padding: 0 3em;
}

.description{
  width: 80%;
  position: relative;
  bottom: -30px;
  left: 5px;
}

.allergies-icon{
  position: relative;
  left: 90%;
  bottom: 1px;
}
.b-tooltip.is-top.is-multiline.is-small:after{
  color: white; 
  background: #23d160;
}
</style>
