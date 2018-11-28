<template>
  <div id="app">
    <raceSelector v-bind:race="selected"/>
    <Races v-bind:races="races"
            v-bind:selected="selected"
            v-bind:onSelect="handleSelect"/>
    
  </div>
</template>

<script>
import Races from './components/Races.vue';
import races from './race-info.js';
import raceSelector from './components/race-selector.vue';

export default {
    data() {
        return {
            races,
            selected: null
        };
    },
    components: {
        Races,
        raceSelector
    },
    methods: {
        handleSelect(race) {
            this.selected = race;
        }
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
