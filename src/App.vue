<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <Players 
        v-bind:players="players"
        v-bind:selected="selected"
        v-bind:onSelect="handleSelect"
    />

    <label for="name">Name</label>
    <input type="text">
    <button v-on:click="handleAdd"> Submit</button>

    
    <Grappler
        v-bind:player="selected"
    />

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Players from './components/Players.vue';
import Grappler from './components/Selected.vue';
import players from './assets/data.js';

export default {
    data() {
        return {
            players,
            selected: null
        };
    },
    components: {
        HelloWorld,
        Players,
        Grappler
    }, 
    methods: {
        handleSelect(player) {
            this.selected = player;
        },
        handleAdd(newPlayer) {
            this.selected = newPlayer;
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
