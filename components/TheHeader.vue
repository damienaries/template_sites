<template>
    <header class="bg-blue-200 w-full h-16 px-8 flex justify-between items-center">
        <div class="logo uppercase text-blue-900">Alex <br> Budman</div>
        <nav class="flex justify-evenly">
            <NuxtLink to='/contact'>Contact</NuxtLink>
            <NuxtLink to='/work'>work</NuxtLink>
            <a href="https://instagram.com">IG</a>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'TheHeader'
    }
</script>

<style scoped>

</style>