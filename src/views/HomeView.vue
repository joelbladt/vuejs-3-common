<template>
  <home-intro />
</template>

<script lang="ts">
  import Vue from 'vue'
  import HomeIntro from "@/components/HomeIntro/HomeIntro.vue";

  export default Vue.extend({
    name: 'HomeView',

    components: {
      HomeIntro,
    },
  })
</script>
