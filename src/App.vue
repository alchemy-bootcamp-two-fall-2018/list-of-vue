<template>
    <div id="app">
      <Superheroes
        v-bind:superheroes="superheroes"
      />
    </div>
</template>

<script>
import Superheroes from './components/Superheroes';
import superheroes from './superhero-data';
export default {
    data() {
        return {
            superheroes
        };
    },
    components: {
        Superheroes
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
