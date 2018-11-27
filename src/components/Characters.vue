<template>
    <ul class="characters">
        <li v-for="character in characters"
            v-bind:class="{character: true, selected: character === selected}"
            v-bind:key="character.name"
            v-on:click="onSelect(character)">
            <img v-bind:src="character.img">
            <h3>{{character.name}} the {{character.role}}</h3>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        characters: Array,
        selected: Object,
        onSelect: Function
    }
};
</script>

<style>
body {
    background: rgb(83, 33, 13);
}

ul {
    background: lightgray;
    padding: 30px 0;
    border-radius: 10px;
}

.characters {
    display: flex;
    flex-wrap: wrap;
    justify-content: center
}

.character {
    list-style: none;
    position: relative;
    width: 200px;
    height: 300px;
    border: 3px solid rgb(102, 47, 2);
    border-radius: 5px;
    text-align: center;
    margin-right: 50px;
    cursor: pointer;
}

.character:hover {
    background: -webkit-linear-gradient(bottom, rgba(61, 17, 17, 1), rgb(255, 0, 0, 1));
}

.character.selected {
    background: rgb(116, 115, 115);
    border: 5px solid green;
    box-shadow: 5px 5px 5px darkgreen;
}

.character h3 {
    text-shadow: 1px 1px 1px white;
}
.character img {
    height: 70%;
    width: auto;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: auto;
}
</style>