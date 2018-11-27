<template>
    <ul class="dogs">
        <li v-for="dog in dogs"
            v-bind:class="{ dog: true, selected: dog === selected }"
            v-bind:key="dog.breed"
            v-on:click="onSelect(dog)">

            <img v-bind:src="dog.image">
            <h3>{{dog.breed}} {{dog.status}}</h3>
        </li>
    </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>
