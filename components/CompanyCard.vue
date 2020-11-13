<template>

    <div class="flex flex-wrap m-2 w-5/6 md:w-1/3 lg:w-1/4 justify-center bg-gray-500 border-solid border-gray-600 border-2 p-6  rounded-lg">
        <router-link :to="`/organisations/${id}`" >     
            <div class="text-center">
                <h1 class="font-medium text-gray-900 text-2xl">{{name}}</h1></div>
                <div class="m-8">
                    <img class="h-20% w-20% " :src='logo'>
                </div>
            <p class="text-xl md:text-lg text-center px-4 pb-4">{{field}}</p>
            <div class="flex flex-wrap justify-start border-t-2 border-gray-600 border-solid py-4">
                <h2 class="text-2xl">We need:</h2>
                <div class="w-full">
                    <ul>
                    <li class="text-base" v-for="need in searchedNeeds" :key="need">{{need}}</li>
                    </ul>

                </div>
            </div>
        </router-link>
        </div>

</template>

<script>
export default {
  name: 'CompanyCard',
  props: ['name', 'field', 'logo', 'needs', 'id'],
  computed: {
        searchedNeeds: function () {
            let needsArray = this.needs.split(',')
            return needsArray
        }
  }      
    
}


</script>

<style scoped>
    

</style>