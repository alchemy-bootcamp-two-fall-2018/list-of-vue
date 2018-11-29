<template>
    <section>
        <div class="focus" v-if="pokemon">
            <h2>{{pokemon.name}}</h2>
            <p>{{pokemon.weight}}</p>
            <p>{{pokemon.height}}</p>
            <img v-bind:src="pokemon.image">
        </div>
        <div v-else>Please choose a Pokemon Character</div>
    </section>
</template>

<script>
export default {
    props: {
        pokemon: Object
    }
};
</script>

<style>

</style>
