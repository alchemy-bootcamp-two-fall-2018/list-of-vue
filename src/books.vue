<template>
    <ul class="books">
        <li v-for="book in books"
            v-bind:class="{ book: true, selected: book === selected }"
            v-bind:key="book.title"
            v-on:click="onSelect(book)">
            <img v-bind:src="book.image">
            <h3>{{book.title}}, written by {{book.author}}</h3>
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
.books {
    display: flex;
    flex-wrap: wrap;
    margin-left: 300px;
}
.book {
    list-style: none;
    position: relative;
    width: 200px;
    height: 200px;
    border: 1px solid #aaa;
    text-align: center;
    margin-right: 3px;
    cursor: pointer;
}
.book.selected {
    background: grey;
}


.book img {
    height: 100px;;
    width: auto;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: auto;
}
</style>