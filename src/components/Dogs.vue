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
    props: {
        dogs: Array,
        selected: Object,
        onSelect: Function
    }
};
</script>

<style>
    ul {
        list-style-type: none;
    }
    img {
        width: 100%;
        box-shadow: 3px 3px 5px darkgreen;
    }
    .dogs {
        display: flex;
    }
    li {
        margin: 2vw;
        padding: 1vw;
        width: 100%;
        border: 4px darkolivegreen solid;
        text-align: center;
        cursor: pointer;
        border-radius: 4px;
    }
    h3 {
        background-color: rgba(45,100,15, 0.2);
        border-radius: 15px;
        padding: 1vw;
        
    }
    .dog.selected {
        background: lightyellow;
        box-shadow: 6px 6px 8px orange;
    }
</style>
