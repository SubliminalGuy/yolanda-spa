<template>
<router-link :to="`/volunteers/${id}`" class="flex justify-center lg:justify-between ">
<div class="flex flex-wrap m-2 w-5/6 md:w-56 justify-center border-solid border-grey-600 border-2 p-6 bg-gray-500 rounded-lg">
        <div>
            <h1 class="font-medium text-gray-900 text-xl">{{name}}</h1></div>
            <div class="m-5">
                <img class="h-30% w-30% rounded-full" :src='picture'>
                
            </div>
        <p class="text-lg">{{roles}}</p>
    </div>
</router-link>
</template>

<script>
export default {
  name: 'UserCard',
  props: ['id', 'name', 'roles', 'picture'],
        
}

</script>