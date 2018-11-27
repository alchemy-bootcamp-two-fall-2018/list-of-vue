<template>
    <div id="app">
        <Characters
            v-bind:characters="characters"
            v-bind:selected="selected"
            v-bind:onSelect="handleSelect"/>
        <Player
            v-bind:character="selected"/>
    </div>
</template>

<script>
import Characters from './components/Characters';
import Player from './components/Player';
import characters from './characters-data.js';

export default {
    data() {
        return {
            characters,
            selected: null
        };
    },
    components: {
        Characters,
        Player
    },
    methods: {
        handleSelect(character) {
            this.selected = character === this.selected ? null : character;
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
}
</style>