<template>
  <div id="app">
    <donuts 
        v-bind:donuts="donuts"
        v-bind:selected="selected"
        v-bind:onSelect="handleSelect"/>
    <Player
        v-bind:donut="selected"/> 
  </div>
</template>

<script>
import Donuts from './components/Donuts';
import Player from './components/Player';
import donuts from './donut-data';


export default {
  data () {
    return {
      donuts,
      selected: null
    };
  }, 
  components: { 
    // Donuts: Donuts
    Donuts,
    Player
  },
  methods: {
    handleSelect(donut) {
      this.selected = donut;
      // console.log ('user selected', donut.name ); 
    }
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
