
<template>
  <div id="app">
    <Snowboards 
        v-bind:snowboards="snowboards"
        v-bind:selected="selected"
        v-bind:onSelect="handleSelect"/>
    <Snowboard
        v-bind:snowboard="selected"/>
  </div>
</template>

<script>
import Snowboards from './components/Snowboards';
import Snowboard from './components/Snowboards_Details';
import snowboards from '../snowboards';
export default {
    data() {
        return {
            snowboards,
            selected: null
        };
    },
    components: {
        Snowboards,
        Snowboard
    },
    methods: {
        handleSelect(snowboard) {
            this.selected = snowboard;
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
}
</style>