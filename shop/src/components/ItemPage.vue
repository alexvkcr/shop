<template>
  <div id="ItemPage" :item-page-id='thing.id'>
    <p class="">HOLA{{ thing.name }}</p>
  </div>
</template>

<script>

export default {
  name: 'ItemPage',
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
      return {
      }
    },
    methods:{
    }
}
</script>

<style>
#ItemPage {
  
}
</style>
