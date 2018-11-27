<template>
  <ul class="books">
    <li v-for="book in books"
        v-bind:key="book.title"
    >
      <h2>{{book.title}} by {{book.author}}</h2>
      <img v-bind:src="book.cover">
    </li>
  </ul>
</template>

<script>
export default {
    props: {
        books: Array,
        
    }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
a {
  color: #42b983;
}
</style>
