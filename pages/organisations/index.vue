
<template>
<div>
  <h1 class="text-gray-900 bg-transparent tracking-tight font-semibold text-5xl font-sans">
          Our Crispy Non-Profits</h1>
  <div class="max-h-full w-full flex justify-center items-center ">
      
    <div class="flex w-4/5 justify-center items-center">
      <div class="flex flex-wrap justify-center md:justify-evenly my-6 md:my-12 ">
      
          <company-card v-for="organisation in organisations" :key="`company${organisation.id}`" :id="organisation.id" :name="organisation.name" :field="organisation.field" :logo="organisation.img_url" :needs="organisation.needs"></company-card>  
      </div>
      
    </div>
  </div>
</div>
</template>

<script>

import CompanyCard from "../../components/CompanyCard"




export default {
  name: 'organisations',
  components: {
            CompanyCard
        },
     async asyncData ({$axios}) {
        let response = await $axios.$get("organisations")
        return {organisations: response}
  
    }     
    
            
        
}           
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
    margin-top: 15px;
  }

</style>