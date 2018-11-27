<template>
  <ul class="books">
    <li v-for="book in books"
        v-bind:key="book.title"
        v-on:click="onSelect(book)">
        <img v-bind:src="book.cover">
        <h3>{{book.title}}</h3>
    </li>
  </ul>
</template>

<script>

export default {
    props: {
        books: Array,
        selected: Object,
        onSelect: Function
    }
};

</script>

<style>

    h3 {
      margin: 40px 0 0;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      display: inline-block;
      margin: 0 10px;
    }

    img {
        height: 200px;
        width: auto;
        cursor:pointer;
    }
    
</style>
