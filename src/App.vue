<template>
  <div id="app">
    <Plants v-bind:plants="plants"/>
  </div>
</template>

<script>
import Plants from './components/Plants';
import plants from './plant-data';

export default {
    data() {
        return {
            plants,
        };
    },
    components: {
        Plants
    },
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
