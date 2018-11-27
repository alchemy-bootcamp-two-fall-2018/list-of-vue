<template>
  <div id="app">
    <Add v-bind:Add="handleAdd"/>
    <Emojis v-bind:emojis="emojis"
            v-bind:onSelect="handleSelect"/>
    <Details v-bind:emoji="selectedEmo"/>
  </div>
</template>

<script>

import emojis from './emoji-data.js';
import Emojis from './components/Emoji.vue';
import Details from './components/Player.vue';
import Add from './components/Add.vue';

export default {
  data() {
    return {
      emojis,
      selectedEmo: null
    };
  },
  components: {
    Emojis,
    Details,
    Add
  },
  methods: {
    handleSelect(emoji) {
      this.selectedEmo = emoji;
    },
    handleAdd(newEmoji) {
      this.emojis.push(newEmoji);
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
img{
  width: 100px;
  margin: 5%;
  display: inline-block;
}
ul {
  list-style-type: none;
}
</style>
