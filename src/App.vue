<template>
  <div id="app">
    <h2>View.js Farm Animal Funtimes!</h2>
    <img id="icon" alt="barn icon" src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Barn_icon.png">
    <Animals
      v-bind:animals="animals"
      v-bind:selected="selected"
      v-bind:onSelect="handleSelect" />
    <Detail 
      v-bind:animal="selected"
      />
  </div>
</template>

<script>
import Animals from './components/Animals.vue';
import Detail from './components/Detail.vue';
import animals from './animal-data.js';

export default {
    data() {
        return {
            animals,
            selected: null
        };
    },
    components: {
        Animals,
        Detail
    },
    methods: {
        handleSelect(animal) {
            this.selected = animal;
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

#icon {
  width: 30%;
}

.selected {
  color: darkred;
}

</style>


