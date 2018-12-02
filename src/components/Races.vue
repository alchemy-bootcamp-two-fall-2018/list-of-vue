<template>
    <ul class="races">
        <li v-for="race in races"
            v-bind:class="{ race: true, selected: race === selected }"
            v-bind:key="race.name"
            v-on:click="onSelect(race)">
            <img v-bind:src="race.image"/>
            <h3>{{race.name}}</h3>
        </li>
    </ul>
</template>

<script>

export default {
    props: {
        races: Array,
        selected: Object,
        onSelect: Function
    }
};
</script>

<style>
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    li {
        border: solid red;
        height: 175px;
        width: 175px;
        margin: 5px;
        text-align: center;
    }

    img {
        position: center;
        max-width: 175px;
        height: auto;
    }

</style>
