<template>
  <div id="app">
    <Dogs
      v-bind:dogs="dogs"
      v-bind:selected="selected"
      v-bind:onSelect="handleSelect"/>
    <Player
      v-bind:dog="selected"/>
  </div>
</template>

<script>
import Dogs from './components/Dogs';
import Player from './components/Player';
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
        Player
    },
    methods: {
        handleSelect(dog) {
            this.selected = dog;
        }
    }
};
</script>

<style>

</style>
