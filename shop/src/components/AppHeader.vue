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


const ModalForm = {
        props: ['email', 'password'],
        template: `
            <form action="">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Login</p>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Email">
                            <b-input
                                type="email"
                                :value="email"
                                placeholder="Your email"
                                required>
                            </b-input>
                        </b-field>

                        <b-field label="Password">
                            <b-input
                                type="password"
                                :value="password"
                                password-reveal
                                placeholder="Your password"
                                required>
                            </b-input>
                        </b-field>

                        <b-checkbox>Remember me</b-checkbox>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button" type="button" @click="cancelLog()">Cerrar</button>
                        <button class="button is-primary">Login</button>
                    </footer>
                </div>
            </form>
        `
    }


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
