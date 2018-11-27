<template>
    <ul class="dogs">
        <li v-for="dog in dogs"
            v-bind:class="{ dog: true, selected: dog === selected }"
            v-bind:key="dog.name"
            v-on:click="onSelect(dog)">
            <img v-bind:src="dog.image">
            <h3>{{dog.name}}</h3>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        dogs: Array,
        selected: Object,
        onSelect: Function
    }
};
</script>

<style>

</style>