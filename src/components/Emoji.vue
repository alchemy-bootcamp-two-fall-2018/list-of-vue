<template>
    <ul>
        <li v-for="emoji in emojis"
            v-bind:key="emoji.name"
            v-on:click="onSelect(emoji)"
            v-bind:class="{selected: isSelected === emoji}">
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
