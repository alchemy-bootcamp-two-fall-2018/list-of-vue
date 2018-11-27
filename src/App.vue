<template>
  <div id="app">
    <Books 
        v-bind:books="books"
    />
  </div>
</template>

<script>

import Books from './components/Books.vue';
import books from './book-data';

export default {
    data() {
        return {
            books,
            selected: null
        };
    },
    
    
    components: {
        Books
    }, 

    methods: {

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
