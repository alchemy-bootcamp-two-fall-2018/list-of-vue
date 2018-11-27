<template>
  <div id="app">
    <Books 
        v-bind:books="books"
        v-bind:selected="selected"
        v-bind:onSelect="handleSelect"/>
    <Bookdetail 
        v-bind:book="selected"/>   
  </div>
</template>

<script>

import Books from './components/Books.vue';
import Bookdetail from './components/Bookdetail.vue';
import books from './book-data';

export default {
    data() {
        return {
            books,
            selected: null
        };
    },
        
    components: {
        Books,
        Bookdetail
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
