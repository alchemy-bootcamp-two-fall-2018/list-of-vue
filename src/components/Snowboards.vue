<template>
    <ul class="snowboards">
        <li v-for="snowboard in snowboards"
            v-bind:class="{ snowboard: true, selected: snowboard === selected }"
            v-bind:key="snowboard.name"
            v-on:click="onSelect(snowboard)">
            <img v-bind:src="snowboard.image">
            <h3>{{snowboard.name}}</h3>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        snowboards: Array,
        selected: Object,
        onSelect: Function
    }
};
</script>

<style>
.snowboards {
    display: flex;
    flex-wrap: wrap;
}
.snowboard {
    list-style: none;
    position: relative;
    width: 200px;
    height: 200px;
    border: 1px solid #aaa;
    text-align: center;
    margin-right: 3px;
    cursor: pointer;
}
.snowboard.selected {
    background: pink;
}
.snowboard h3 {
    text-shadow: 1px 1px 1px white;
}
.snowboard img {
    height: 70%;
    width: auto;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: auto;
}
</style>