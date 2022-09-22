<template>
    <div class="w-full bg-blue-900 px-12 py-8 flex justify-end">
        <router-link to="/" class="mx-2 text-gray-100 hover:text-blue-100">Home</router-link>
        <router-link to="/work" class="mx-2 text-gray-100 hover:text-blue-100">Work</router-link>
        <router-link to="/contact" class="mx-2 text-gray-100 hover:text-blue-100">Contact</router-link>
    </div>
</template>

<script>
    // import { RouterLink } from 'vue-router';
    export default {
        components:{
            Navigation: 'Navigation'
        }
    }
</script>

<style scoped>

</style>