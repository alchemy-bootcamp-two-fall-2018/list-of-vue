<template>
    <ul class="races">
        <li v-for="race in races"
            v-bind:class="{ race: true, selected: race === selected }"
            v-bind:key="race.name"
            v-on:click="onSelect(race)">
            <img v-bind:src="race.image"/>
            <h3>{{race.name}}</h3>
            <!-- <h3 v-for="distance in race.distance"
                v-bind:key="distance">
                {{distance}}
            </h3> -->
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
    li {
        display:flex;
        flex-direction: column;
        border: solid red;
        flex-direction: column;
        height: auto;
        width: auto;
        margin: 10px;
        text-align: center;
    }

    img {
        position: relative;
        align-content: center;
        max-width: 150px;
        height: auto;
        position: relative; 
        
    }

</style>
