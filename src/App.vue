<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Animals msg="Hey it's animals"/>
    <Detail msg="This is from Detail"/>
  </div>
</template>

<script>
import Animals from './components/Animals.vue';
import Detail from './components/Detail.vue';

export default {
    name: 'app',
    components: {
        Animals,
        Detail
    }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
