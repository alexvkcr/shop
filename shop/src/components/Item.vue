<template>
  <div id="Item" :item-id='thing.id' 
    @mouseover="mouseIn(thing.id)"
    @mouseleave="mouseOut(thing.id)">
    <p class="title">{{ thing.name }}</p>
    <img v-img="{title: thing.name}" class="img" :src="require(`@/assets/${thing.img}`)" :alt="`Imagen de ${thing.name}`" >
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
  name: 'Item',
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
    data:()=> {
      return {img_amplified: false,//It'll be used to set wheather it'll need expansion or not
              original_padding: 0,
      }
    },
    methods:{
      mouseIn(id){
        if(!this.img_amplified){
          this.expand(id)
          this.img_amplified=true
        }
      },
      mouseOut(id){
        if(this.img_amplified){
          this.contract(id)
          this.img_amplified=false
        }
      },
      expand(id){
        let img = document.querySelector(`#Item[item-id='${id}'] > img`)
        //img.style.transitionTimingFunction = "cubic-bezier(1,.07,0,-0.05)"
        img.style.transform = "scale(1.2,1.2)"
      },
      contract(id){
        let img = document.querySelector(`#Item[item-id='${id}'] > img`)
        img.style.transform ="scale(1,1)"
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
  margin: 5px auto 10px 10px;
}

.img{
  display: block;
  margin: auto;
  padding: 0 3em;
  transition: transform 3s cubic-bezier(.19,1.95,.43,.48)
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
