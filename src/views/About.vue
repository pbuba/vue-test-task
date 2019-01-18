<template>
  <div class="about">
    <h1 class="title">This is an about page</h1>
    <AboutMe/>
  </div>
</template>

<script>
import AboutMe from '@/components/AboutMe.vue';

export default {
  name: 'About',
  components: {
    AboutMe
  }
};
</script>
