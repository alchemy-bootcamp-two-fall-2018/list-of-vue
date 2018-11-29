<template>
  <div id="app">
    <Focus
    v-bind:pokemon="selected" />
    <Pokemon 
    v-bind:pokemons="pokemons"
    v-bind:selected="selected"
    v-bind:onSelect="handleSelect"/>
    
  </div>
</template>

<script>
import Pokemon from './components/Pokemon';
import pokemons from './components/pokemon-data';
import Focus from './components/Focus';

export default {
    data(){
        return {
            pokemons,
            selected: null
        };
    },
    components: {
        Focus,
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
    padding:0;
    justify-content: center;
}
h3{
    

}

li{

}
img{

}
.section{
    border:solid 3px blue;
    display:absolute;
    margin: auto 0;
    background:red;
    width:500px;
}
.focus img{
    width:30%;
}
</style>
