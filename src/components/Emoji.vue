<template>
    <ul>
        <li v-for="emoji in emojis"
            v-bind:key="emoji.name"
            v-on:click="onSelect(emoji)"
            v-bind:class="{selected: false}">
        <img v-bind:src="emoji.image">
        </li>
    </ul>
</template>

<script>

export default {
  props: {
    emojis: Array,
    onSelect: Function,
    selected: Boolean
  }
};

</script>
