<template>
  <div id="app">
    <Pokemon 
    v-bind:pokemons="pokemons"
    v-bind:onSelect="handleSelect"/>
  </div>
</template>

<script>
import Pokemon from './components/Pokemon';
import pokemons from './components/pokemon-data';

export default {
    data(){
        return {
            pokemons,
            selected: null
        };
    },
    components: {
        Pokemon

    },
    methods: {
        handleSelect(pokemon) {
            this.selected = pokemon;
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
ul{
    display:flex;
}
h3{
    

}

li{

}
img{

}
</style>
