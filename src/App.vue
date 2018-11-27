<template>
  <div id="app">
    hi
    <Races/>
  </div>
</template>

<script>
import Races from './components/Races.vue';
export default {
    components: {
        Races

    }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
