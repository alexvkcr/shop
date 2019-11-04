<template>
  <div id="Item" :item-id='thing.id'>
    <p class="title">{{ thing.name }}</p>
    <p>{{ thing.description }}</p>
    
    <b-tooltip
      :label='thing.allergens.toString()'
      type="is-light"
      size="is-small"
      multilined>
      
      <b-icon   class="allergies-icon"
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
  margin: 90% 90% 5% 5%;
}
</style>
