<template>
    <div v-if="emoji">
        <h2>{{emoji.name}}</h2>
        <p>Role: {{emoji.role}}</p>
        <p>Category: {{emoji.category}}</p>
        <img v-bind:src="emoji.image">
    </div>
    <div v-else>Please choose an emoji</div>
</template>

<script>
export default {
  props: {
    emoji: Object
  }
};
</script>
