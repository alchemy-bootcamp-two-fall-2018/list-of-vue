<template>
  <div id="app">
    <Races v-bind:races="races"/>
  </div>
</template>

<script>
import Races from './components/Races.vue';
import races from './race-info.js';

export default {
    data() {
        return {
            races,
            selected: null
        };
    },
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
