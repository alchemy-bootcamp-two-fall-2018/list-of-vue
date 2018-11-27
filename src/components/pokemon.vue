<template>
    <ul>
        <pre>{{Pokemon}}</pre>
        <li v-for="pokemon in pokemons"
        v-bind:key="pokemon.name">
            <h3>{{pokemon.name}}</h3>
            <img v-bind:src= "pokemon.image">
            
            
        </li>
    </ul>        
</template>

<script>


export default {
    props: {
        pokemon:Array
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
