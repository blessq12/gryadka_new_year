<script>
// stores
import { mapStores } from 'pinia'
import { useDataStore } from './stores/dataStore.js'
// components
import Popup from './components/Popup.vue'
import Navbar from './components/Navbar.vue'
import HeroBanner from './components/HeroBanner.vue'
import Includes from './components/Includes.vue'
import Offer from './components/Offer.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default{
  components:{
    Popup,
    Navbar,
    HeroBanner,
    Includes,
    Offer,
    Contact,
    Footer
  },
  mounted(){},
  provide(){
    return {
      company: this.dataStore
    }
  },
  data:()=>({
    popup: false,
    overlay: false,
    offer: null
  }),
  computed:{
    ...mapStores(useDataStore)
  },
  methods:{
    popupToggle(offer){
      if (this.popup){
        this.popup = false
        this.overlay = false
        this.offer = null
      } else {
        this.overlay = true
        this.popup = true
        this.offer = offer
      }
    }
  },
  watch:{
    overlay(val){
      if ( val ) {
        if (!document.body.classList.contains('overflow-hidden')){
          document.body.classList.add('overflow-hidden')
        }
      } else {
        if (document.body.classList.contains('overflow-hidden')){
          document.body.classList.remove('overflow-hidden')
          this.popup = false
        }
      }
    }
  }
}
</script>

<template>
  <transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <div class="overlay" @click="overlay = !overlay" v-if="overlay"></div>
  </transition>
  <transition
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutUp"
  >
    <popup v-if="popup" :offer="offer" @popupToggle="popupToggle"></popup>
  </transition>
  <navbar></navbar>
  <hero-banner></hero-banner>
  <includes @popupToggle="popupToggle"></includes>
  <offer @popupToggle="popupToggle"></offer>
  <contact></contact>
  <Footer></Footer>
</template>

<style lang="sass">
.overlay
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background: rgba(0, 0, 0, .8)
  z-index: 15
</style>
