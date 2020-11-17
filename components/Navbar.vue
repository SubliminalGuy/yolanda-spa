<template>
  <div class="flex-none items-start inline-flex flex-col flex min-h-full w-full" >
    <div class="flex-none flex shadow-md bg-blue-900 w-full">
      <div class="flex-none bg-blue-900 h-20 items-center justify-around flex mx-auto w-full max-w-5xl">
          <div class="flex-none items-center inline-flex justify-center h-16">
            <p class="text-white no-underline"><router-link to="/" exact >Left Together</router-link></p>
          </div>
          <div class="text-white space-x-8 items-center inline-flex justify-center flex">
                <div class="hidden lg:inline">
                  <nuxt-link to="/" exact>home</nuxt-link>
                </div>
                <div class="hidden lg:inline"> 
                <nuxt-link to="/organisations">organisations</nuxt-link>
                </div>
                <div class="hidden lg:inline">
                  <nuxt-link to="/volunteers">volunteers</nuxt-link>
                </div>
                <div class="hidden lg:inline">
                  sign-in
                </div>
                <div>
                  <svg @click="clickMenuModal" class="w-10 h-10 lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg>
                </div>
          </div>
      </div>
  </div>
</div>

</template>
<script>


export default {
  name: 'Navbar',
  props: {
    msg: String
  },

  methods: {
    clickMenuModal: function() {
      this.$store.commit("menuModal/changeMenuModal");
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



p {
  font-family: 'coinyregular';
  font-size: 2.4rem;
  font-weight: 400;
}
</style>