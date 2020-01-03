<template>
  <div id="AppHeader">
      <div @click="showSideBar()" class="iconSideBar">
      <b-icon   class="colored lateral-icon-left"
                icon="view-headline"
                size="is-medium">
            </b-icon></div>
      <div @click="cardModal()"
                class="colored lateral-icon-right">

      <b-icon   icon="account"
                size="is-medium">
            </b-icon>
      </div>
      
    ¡Bollería para llevar!
  </div>
</template>

<script>

export default {
  name: 'AppHeader',
  methods:{
    cardModal() {
        this.$buefy.modal.open({
            parent: this,
            component: ModalForm,
            hasModalCard: true,
            customClass: 'custom-class custom-class-2'
        })
        this.logUserState()
    },
    showSideBar(){
      let sideBar = document.querySelector('#SideBar')
      if(window.matchMedia("(max-width: 490px)").matches){//Mobile first
         sideBar.style.display = 'unset'
      }else if(sideBar.style.display == undefined ){//Never have been touched
        this.$parent.$emit('HIDE_SIDEBAR')
        sideBar.style.display = 'none'
      }else if( sideBar.style.display == 'none'){//It has been taken out
        this.$parent.$emit('BRING_SIDEBAR')
        sideBar.style.display ='unset'
      }else{//it has been brought
        this.$parent.$emit('HIDE_SIDEBAR')
        sideBar.style.display = 'none'
      }
    }
  }
}
</script>

<style>
#AppHeader {
  margin-top: 1vh;
  padding: 1vh 5vw;
  text-align: center;
}
.icon-container{
  display: none;
}
.lateral-icon-left{
  position: absolute;
  left: 10px;
}
.lateral-icon-right{
  position: absolute;
  right: 10px;
}
.colored{
  color: #23d160;
}
</style>
