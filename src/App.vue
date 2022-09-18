
<template>
  <div>
    <header class="bg-white shadow" v-if="$route.meta.title">
     
    </header>
    <navigation></navigation>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
  import Navigation from './components/Navigation.vue';

  export default {
    components: {
      Navigation,
    }
  }
</script>