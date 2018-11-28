<template>
    <ul>
        <!-- <pre>{{races}}</pre> -->
        <li v-for="race in races"
            v-bind:key="race.name">
        
            <img v-bind:src="race.image"/>
            <h3>{{race.name}}</h3>

            <h3 v-for="distance in race.distance"
                v-bind:key="distance" 
                >{{distance}}</h3>
        </li>
    </ul>
</template>

<script>

export default {
    props: {
        races: Array
    }
};
</script>

<style>
    li {
        display:flex;
        border: solid red;
        flex-direction: column;
        height: auto;
        width: auto;
        margin: 10px;
        text-align: center;
    }

    img {
        position: absolute;
        align-content: center;
        max-width: 150px;
        height: auto;
        position: relative; 
        
    }

</style>
