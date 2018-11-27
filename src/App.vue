<template>
  <div id="app">
    <h1> A few badass bass players </h1>
    <Bassists 
        v-bind:bassists="bassists"
        v-bind:selected="selected"
        v-bind:onSelect="handleSelect"/>
    <Bassist_Detail
        v-bind:bassist="selected"/>
  </div>
</template>


<script>
import Bassists from './components/Bassists.vue';
import Bassist_Details from './components/Bassist_Detail.vue';
import bassists from './bassist-data.js';

export default {
    data() {
        return {
            bassists,
            selected: null
        };
    },

    components: {
        Bassists,
        Bassist_Details
    },

    methods: {
        handleSelect(bassist) {
            this.selected = bassist;
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
