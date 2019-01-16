<template>
  <div class="home">
    <img class="rounded mx-auto d-block" alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Здравствуйте это выполненное тестовое задание"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
};
</script>
