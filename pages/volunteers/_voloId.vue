<template>
<div class="flex flex-wrap w-full justify-center ">
    <h1 class="text-gray-900  bg-transparent w-5/6 font-semibold text-5xl font-sans">
          Here Is Someone Special For You</h1>
    <div id="card-container" class="flex flex-wrap justify-center lg:flex-no-wrap  m-12 w-3/4 md:w-1/2 border-solid border-gray-600 border-2 px-6 py-6 bg-gray-500 rounded-lg">
        <div class="max-w-1/2 lg:max-w-2/6 m-4">
        <img class="rounded-full" :src='getVolunteerData.image_url'>
        </div>
        <div class="flex flex-wrap justify-center lg:justify-between mx-2 lg:mx-8 px-2 w-full lg:w-4/6 border-0 border-solid lg:border-l-2 border-gray-600 ">
        <h1 class="text-gray-900 bg-transparent tracking-tight font-semibold text-3xl lg:text-4xl font-sans">
          {{ getVolunteerData.name}}</h1>
        <h2 class="text-xl lg:text-2xl pb-2 w-full text-center lg:text-left">{{getVolunteerData.roles}}</h2>
            <div class="flex flex-wrap justify-start">
                <p class="text-base md:text-lg lg:text-xl font-semibold w-full my-2">Short Bio:</p>
                <p class="text-sm md:text-base lg:text-lg"> {{getVolunteerData.bio}}</p>
                <p class="text-base md:text-lg lg:text-xl font-semibold w-full my-2">Skillz:</p>
                <p class="text-sm md:text-base lg:text-lg"> {{getVolunteerData.skills}}</p>
            </div>
        </div>
    </div>
</div>
</template>


<script>


export default {
  name: 'VolunteerPage',

  head () {
      return {
          title: this.getVolunteerData.name,
        meta: [
            {name: 'twitter:title', content: 'This Volunteer Rocks:'},
            {name: 'twitter:description', content: this.getVolunteerData.name},
            {name: 'twitter:image', content: this.getVolunteerData.image_url},
            {name: 'twitter:card', content: 'summary_large_image'}
        ]
      }
  },
   async asyncData ({params, $axios}) {
        let response = await $axios.$get(`volunteers/${params.voloId}`)
        return {getVolunteerData: response}
  
    },
   
 
    created() {
            console.clear()
            
        }
                
               
        
}
</script>

<style scoped>
    h1 {
        text-align: center;
        margin-top: 15px;
        }
</style>