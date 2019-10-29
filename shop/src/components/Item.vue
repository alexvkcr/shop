<template>
  <div id="Item">
    <p>{{ object.id }}: {{ object.name }}</p>
    <p>{{ object.description }}</p>
    <ul>
      <li v-for="al in object.allergens" :key="al">{{ al }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Items',
  props: {
    object: {
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
</style>
