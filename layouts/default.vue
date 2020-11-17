<template>
<div>
  <navbar></navbar>
   <div v-if="getMenuModal" class="w-full h-screen bg-black">
    <div class="flex flex-wrap justify-center items-center bg-black text-white h-64">
      <router-link to="/" exact class="w-full text-2xl text-center mt-24 mb-6" ><p @click="clickMenuModal" >home</p></router-link>
      <router-link to="/organisations" class="w-full text-2xl text-center mt-6 mb-6"><p @click="clickMenuModal">organisations</p></router-link>
      <router-link to="/volunteers" class="w-full text-2xl text-center mt-6 mb-6"><p @click="clickMenuModal"> volunteers</p></router-link>
      <p class="w-full text-2xl text-center my-6" @click="clickMenuModal">sign-in</p>
    </div>
  </div>
  <nuxt v-else></nuxt>
  <footbar></footbar>
  
</div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footbar from '../components/Footbar'
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    Navbar, Footbar
  },
  
  computed: {
          getMenuModal () {
            return this.$store.state.menuModal.menuModal
          }
        },   
  methods: {
    clickMenuModal: function() {
        this.$store.commit("menuModal/changeMenuModal");
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router-link-active {
    text-decoration: underline;
  }

  p .router-link-active {
    text-decoration: none;
  }


</style>

