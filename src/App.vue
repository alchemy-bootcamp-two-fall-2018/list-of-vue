<template>
  <div id="app">
    <h1>Cactus Land</h1>
    <List 
      v-bind:plants="plants"
      v-bind:selected="selected"
      v-bind:onSelect="handleSelect" />
    <hr>
    <Cactus 
      v-bind:plant="selected" />
  </div>
</template>

<script>
import List from './components/List';
import Cactus from './components/Cactus';
import plants from './plants';

export default {
    data() {
        return {
            plants,
            selected: null
        };
    },
    components:{
        List,
        Cactus
    },
    methods: {
        handleSelect(plant) {
            this.selected = plant;
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

  #app h1 {
    font-size: 50px;
  }

</style>
