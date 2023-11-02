<script>
// stores
import { mapStores } from 'pinia'
import { useDataStore } from './stores/dataStore.js'
// components
import Navbar from './components/Navbar.vue'
import HeroBanner from './components/HeroBanner.vue'
import Includes from './components/Includes.vue'
import Offer from './components/Offer.vue'
import Footer from './components/Footer.vue'

export default{
  components:{
    Navbar,
    HeroBanner,
    Includes,
    Offer,
    Footer
  },
  mounted(){},
  data:()=>({
    test: false
  }),
  computed:{
    ...mapStores(useDataStore)
  }
}
</script>

<template>
  <navbar></navbar>
  <hero-banner></hero-banner>
  <includes></includes>
  <offer></offer>
  <Footer></Footer>
</template>

<style lang="sass">
</style>
