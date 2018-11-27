<template>
  <div id="app">
    <Pokemon v-bind:pokemon="pokemon"/>
  </div>
</template>

<script>
import Pokemon from './components/Pokemon.vue';
import pokemon from './pokemon-data';

export default {
    data(){
        return {
            pokemon
            selected: null
        };
    },
    components: {
        Pokemon
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

h3{

}

li{

}
img{

}
</style>
