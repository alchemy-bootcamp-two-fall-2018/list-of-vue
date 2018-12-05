<template>
    <section>
        <div v-if="book">
            <h2>{{book.title}}</h2>
            <p>By {{book.author}}</p>
            <img v-bind:src="book.image">
        </div>
        <div v-else>Add a book to your collection</div>
    </section>
</template>

<script>
export default {
    props: {
        book: Object
    }
};
</script>

<style>

</style>
