<template>
  <div id="app">
    <Leafygreens
      v-bind:leafygreens="leafygreens"
      v-bind:onSelect="handleSelect"
    />
  </div>
</template>

<script>
import Leafygreens from './components/Leafygreens.vue';
import leafygreens from './leafy-greens.js';

export default {
    data() {
        return {
            leafygreens,
            selected:null
        };
    },
    components: {
        Leafygreens
    },
    methods: {
        handleSelect(leafygreen) {
            console.log('user selected leafygreen', leafygreen.name);
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
