<template>
  <div id="app">
    <donuts v-bind:donuts="donuts"
            v-bind:onSelect="handSelect "/> 
  </div>
</template>

<script>
import Donuts from './components/Donuts';
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
    Donuts
  },
  methods: {
    handleSelect(donut) {
      // console.log ('user selected donut)
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
