<template>
  <div id="app">
    <Books 
        v-bind:books="books"
        v-bind:selected="selected"
        v-bind:onSelect="handleSelect"/>
    <Player
        v-bind:book="selected"/>
  </div>
</template>

<script>
import Books from './Books';
import Player from './Player';
import books from './books-data.js';
export default {
    data() {
        return {
            books,
            selected: null
        };
    },
    components: {
        Books,
        Player
    },
    methods: {
        handleSelect(book) {
            this.selected = book;
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