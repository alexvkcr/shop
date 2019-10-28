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
          allergies: {
            type: Array,
            required: true,
            default: [],
            validator: allergies => (!Array.isArray(allergies)) ? false : ! allergies.some(it => typeof(it)!='string')
          },
          price: Number,
          }
}
</script>

<style>
#item {
}
</style>
