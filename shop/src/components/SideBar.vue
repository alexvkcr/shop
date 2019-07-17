<template>
  <div id="SideBar">
    <aside class="sidebar">side
      <ul>
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/items">Artículos</router-link></li>
      </ul>
    </aside>
  </div>
</template>

<script>


export default {
  name: 'SideBar'
}
</script>

<style>
#SideBar {
}

@media screen and (max-width: 490px) {
  @SideBar{
    display: unset;
  }
}
</style>
