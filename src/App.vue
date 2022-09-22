
<template>
  <div>
    <navigation></navigation>
    <main>
      <router-view />
    </main>
    <foot></foot>
  </div>
</template>

<script>
  import Navigation from './components/Navigation.vue';
  import Foot from './components/Foot.vue';

  export default {
    components: {
      Navigation,
      Foot
    }
  }
</script>