<template>
    <ul>
        <li v-for="emoji in emojis"
            v-bind:key="emoji.name"
            v-on:click="onSelect(emoji)"
            v-bind:class="{selected: isSelected === emoji}">
        <h3>{{emoji.name}}</h3>
        <img v-bind:src="emoji.image">
        </li>
    </ul>
</template>

<script>

export default {
  props: {
    emojis: Array,
    onSelect: Function,
    isSelected: Object
  }
};

</script>

<style>

li {
    list-style: none;
    width: 200px;
    height: 200px;
    border: 1px solid #aaa;
    text-align: center;
    margin-right: 3px;
    cursor: pointer;
    display: inline-block;
    margin-top: 10%;
}

.selected {
    background: pink;
}

h3 {
    text-shadow: 1px 1px 1px white;
}

img {
  width: 100px;
  margin: 5%;
  display: inline-block;
}
</style>
