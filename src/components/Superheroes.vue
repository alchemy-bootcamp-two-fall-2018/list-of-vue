<template>
    <ul class="superheroes">
        <li v-for="superhero in superheroes"
            v-bind:key="superhero.name"
        >
            <img v-bind:src="superhero.image">
            <h3>{{superhero.name}}</h3>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        superheroes: Array
    }
};
</script>

<style>

</style>
