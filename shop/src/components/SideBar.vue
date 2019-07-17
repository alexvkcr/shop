<template>
  <div id="SideBar">
    <b-menu>
      <b-menu-list label="Menú">
        <router-link to="/"><b-menu-item label="Inicio"></b-menu-item></router-link>
        <router-link to="/items"><b-menu-item label="Artículos"></b-menu-item></router-link>
      </b-menu-list>
    </b-menu>
  </div>
</template>

<script>


export default {
  name: 'SideBar'
}
</script>

<style>
#SideBar {
  padding: 1px 10px;
}

@media screen and (max-width: 490px) {
  #SideBar{
    display: none;
  }
}
</style>
