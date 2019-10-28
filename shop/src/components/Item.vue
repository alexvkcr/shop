<template>
  <div id="Item">
    id{}
  </div>
</template>

<script>

export default {
  name: 'Items',
  props: {id: String,
          name: String,
          description: String,
          allergens: {
            type: Array,
            required: true,
            default: [],
            validator: allergens => (!Array.isArray(allergens)) ? false : ! allergens.some(it => typeof(it)!='string')
          },
          price: Number,
          }
}
</script>

<style>
#item {
}
</style>
