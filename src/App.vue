<template>
  <div id="app">
    <raceInfo/>
    <Races v-bind:races="races"/>
    
  </div>
</template>

<script>
import Races from './components/Races.vue';
import races from './race-info.js';
import raceInfo from './components/race-selector.vue';

export default {
    data() {
        return {
            races,
            selected: null
        };
    },
    components: {
        Races,
        raceInfo

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
