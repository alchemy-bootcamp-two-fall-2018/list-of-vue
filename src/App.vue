<template>
    <div id="app">
      <h1>Superhero List</h1>
      <Superheroes
        v-bind:superheroes="superheroes"
        v-bind:selected="selected"
        v-bind:onSelect="handleSelect"
      />
      <SuperheroDetail
        v-bind:superhero="selected"/>
    </div>
</template>

<script>
import Superheroes from './components/Superheroes';
import superheroes from './superhero-data';
import SuperheroDetail from './components/SuperheroDetail';

export default {
    data() {
        return {
            superheroes,
            selected: null
        };
    },
    components: {
        Superheroes,
        SuperheroDetail
    },
    methods: {
        handleSelect(superhero) {
            this.selected = superhero;
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
