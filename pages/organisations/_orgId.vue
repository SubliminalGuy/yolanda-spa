<template>
<div class="flex flex-wrap w-full justify-center ">
    <h1 class="text-gray-900  bg-transparent w-5/6 font-semibold text-5xl font-sans">
          This Organisation Wants You</h1>
    <div id="card-container" class="flex flex-wrap justify-center lg:flex-no-wrap  m-12 w-3/4 md:w-2/3 border-solid border-gray-600 border-2 px-6 py-6 bg-gray-500 rounded-lg">
        <div class="max-w-1/2 lg:max-w-2/6 mx-4">
        <img  :src='getOrganisationData.img_url'>
        </div>
        <div class="flex flex-wrap justify-center lg:justify-between mx-2 lg:mx-8 px-2 w-full lg:w-4/6 border-0 border-solid lg:border-l-2 border-gray-600 ">
        <h1 class="text-gray-900 bg-transparent tracking-tight font-semibold text-3xl lg:text-4xl font-sans">
          {{ getOrganisationData.name }}</h1>
        <h2 class="text-xl lg:text-2xl pb-2 w-full text-center lg:text-left">{{getOrganisationData.field}}</h2>
            <div class="flex flex-wrap justify-start">
                <p class="text-lg md:text-xl lg:text-2xl font-semibold w-full my-2">We need:</p>
                <ul>
                    <li class="text-base md:text-lg lg:text-xl " v-for="item in searchedNeed" :key="item">{{item}}</li>
                </ul>
                <p class="text-lg md:text-xl lg:text-2xl font-semibold w-full my-2">Mission Statement:</p>
                <p class="text-base md:lg lg:text-xl"> {{getOrganisationData.message}}</p>
                <p class="text-lg md:text-xl lg:text-2xl font-semibold w-full my-2">Job Description:</p>
                <p class="text-base md:lg lg:text-xl"> {{getOrganisationData.Offer}}</p>
            </div>
        </div>
    </div>
</div>
</template>


<script>


export default {
    name: '_orgId',

    async asyncData ({params, $axios}) {
        let response = await $axios.$get(`organisations/${params.orgId}`)
        return {getOrganisationData: response}
  
    },
   
    computed: {
            searchedNeed: function () {
            let needArray = this.getOrganisationData.needs.split(',')
            return needArray
            }
            
        },    
                
               
        
}
</script>

<style scoped>
    h1 {
        text-align: center;
        margin-top: 15px;
        }
</style>