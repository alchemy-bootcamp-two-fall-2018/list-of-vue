<template>
  <div id="app">
    <img v-bind:src="emojis[0].image">
    <Emojis v-bind:emojis="emojis"
            v-bind:onSelect="handleSelect"/>
    <Details v-bind:emoji="selectedEmo"/>
  </div>
</template>

<script>

import emojis from './emoji-data.js';
import Emojis from './components/Emoji.vue';
import Details from './components/Player.vue';

export default {
  data() {
    return {
      emojis,
      selectedEmo: null
    };
  },
  components: {
    Emojis,
    Details
  },
  methods: {
    handleSelect(emoji) {
      this.selectedEmo = emoji;
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
