<template>
    <ul class="cacti">
        <li v-for="cactus in cacti"
            v-bind:class="{ cactus: true, selected: cactus === selected }"
            v-bind:key="cactus.name"
            v-on:click="onSelect(cactus)">
            <img v-bind:src="cactus.image">
            <h3>{{cactus.name}}</h3>
            <h3>Huggability factor: {{cactus.huggability}}</h3>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        cacti: Array,
        selected: Object,
        onSelect: Function
    }
};
</script>