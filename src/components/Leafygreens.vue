<template>
    <ul class="leafygreens">
        <li v-for="leafygreen in leafygreens"
            v-bind:class="{ leafygreen: true, selected: leafygreen === selected }"
            v-bind:key="leafygreen.name"
            v-on:click="onSelect(leafygreen)"
        >
            <img v-bind:src="leafygreen.image">
            <h3>{{leafygreen.name}}</h3>
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        leafygreens: Array,
        selected: Object,
        onSelect: Function
    }
};
</script>
 <style>
 .leafygreens {
    display: flex;
    flex-wrap: wrap;
}
.leafygreen {
    list-style: none;
    position: relative;
    width: 400px;
    height:400px;
    border: 1px solid black;
    text-align: center;
    margin: 5px 5px;
    cursor: pointer;
}
.leafygreen.selected {
  background: yellowgreen;
}
 .leafygreen img {
    height: 50%;
    width: auto;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: auto;
}
 .leafygreen h3 {
    text-shadow: 1px 1px 1px gray;
}

 </style>