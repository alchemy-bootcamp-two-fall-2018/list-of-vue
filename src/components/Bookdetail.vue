<template>
    <section>
        <div v-if="book">
            <h2>{{ book.title }}</h2>
            <p>By {{ book.author }}</p>
            <p>Winner of {{ book.awards }}</p>
            <img v-bind:src="book.cover">
        </div>
        <div v-else>Select a book</div>
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
