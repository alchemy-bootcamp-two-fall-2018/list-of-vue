<template>
    <ul>
        <pre>{{races}}</pre>
        <li v-for="race in races"
            v-bind:key="race.name">
        
            <h3>{{race.name}}</h3>
            <img v-bind:src="race.image"/>
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
        display:inline-block;
        height: 100px;
        width: 100px;
        border: 1px solid gray;
        text-align: center;
    }

    img {
        height: 100%;
        width: auto;
        position: relative; 
        
    }

</style>
