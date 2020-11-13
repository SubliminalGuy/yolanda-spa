<template>
  <div class="flex-none pt-5 pb-5 pr-10 pl-10 items-start inline-flex justify-start flex-col flex h-12 w-full " >
      
  <p class="text-gray-900 bg-transparent tracking-tight font-light text-6
2xl font-sans">Yolanda is here to help you get engaged. Here you can learn more about <span>me</span>.</p>
  
</div>

</template>
<script>


export default {
  name: 'Footbar',
  props: {
    msg: String
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
    text-decoration: underline;
}
</style>