<template>
  <div id="app">
    <div class="wrapper">
      <h1>Pick your favorite Guitarist</h1>
      <Guitarist v-bind:guitarists="guitarists"
                 v-bind:selected="selected"
                 v-bind:onSelect="handleSelect"/>
      <Personal
          v-bind:guitarist="selected"/>
    </div>
  </div>
</template>

<script>
import Guitarist from './components/Guitarist.vue';
import Personal from './components/Personal.vue';
import guitarists from './Guitarists.js';

export default {
    components: {
        Guitarist,
        Personal,
    },
    data() {
        return {
            guitarists,
            selected: null
        };
    },
    methods: {
        handleSelect(guitarist) {
            this.selected = guitarist;
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
}
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
}
</style>
