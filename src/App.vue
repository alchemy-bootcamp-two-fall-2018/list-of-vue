<template>
  <div id="app">
    <h1>What up Dog?</h1>
    <Dogs
      v-bind:dogs="dogs"
      v-bind:selected="selected"
      v-bind:onSelect="handleSelect"/>
    <DogDetail
      v-bind:dog="selected"/>
  </div>
</template>

<script>
import Dogs from './components/Dogs';
import DogDetail from './components/DogDetail';
import dogs from './dog-data';

export default {
    data() {
        return {
            dogs,
            selected: null
        };
    },
    components: {
        Dogs,
        DogDetail
    },
    methods: {
        handleSelect(dog) {
            this.selected = dog;
        }
    }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
h1 {
    text-align: center;
}
</style>
