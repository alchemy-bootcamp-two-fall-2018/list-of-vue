<template>
    <ul class="superheroes">
        <li v-for="superhero in superheroes"
            v-bind:key="superhero.name"
            v-bind:class="{ superhero: true, selected: superhero === selected }"
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

.superheroes {
    display: flex;
    flex-wrap: wrap;
}

.superhero {
    list-style: none;
    position: relative;
    width: 200px;
    height: 200px;
    border: 1px solid black;
    text-align: center;
    margin: 5px 5px;
    cursor: pointer;
}

.superhero img {
    height: 70%;
    width: auto;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: auto;
}

.superhero h3 {
    text-shadow: 1px 1px 1px gray;
}

</style>
