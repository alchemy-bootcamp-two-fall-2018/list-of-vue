<template>
    <ul>
        <!--<pre>{{Pokemon}}</pre>-->
        <li v-for="pokemon in pokemons"
            v-bind:class="{ pokemon: true, selected: pokemon === selected }"
            v-bind:key="pokemon.name"
            v-on:click="onSelect(pokemon)">
            <h3>{{pokemon.name}}</h3>
            <img v-bind:src= "pokemon.image"> 
        </li>
    </ul>        
</template>

<script>


export default {
    props: {
        pokemons: Array,
        onSelect: Function
    }    
};
</script>

<style>
li{
display:flex;
flexwrap:wrap;
width:100%;
cursor:pointer;
}


</style>
