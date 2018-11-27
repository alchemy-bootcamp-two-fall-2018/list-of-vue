<template>
    <ul>
        <!--<pre>{{Pokemon}}</pre>-->
        <li v-for="pokemon in pokemons"
            v-bind:class="{ pokemon: true, selected: pokemon === selected }"
            v-bind:key="pokemon.name"
            v-on:click="onSelect(pokemon)">
            
            <img v-bind:src= "pokemon.image"> 
            <h3>{{pokemon.name}}</h3>
            <h3>{{pokemon.height}}</h3>
            <h3>{{pokemon.weight}}</h3>
            
        </li>
    </ul>        
</template>

<script>


export default {
    props: {
        pokemons: Array,
        onSelect: Function
    }, 
    methods:{
        handleSelect(pokemon) {
            this.onSelect('selected', pokemon);
        }
    }  
};
</script>

<style>
li{
list-style:none;    
cursor:pointer;
}


</style>
