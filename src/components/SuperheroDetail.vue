<template>
    <section>
        <div v-if="superhero">
            <h2>{{superhero.name}}</h2>
            <img v-bind:src="superhero.image">
            <p>Location: {{superhero.location}}</p>
            <p>Powers: {{superhero.powers}}</p>
        </div>
        
    </section>
</template>

<script>
export default {
    props: {
        superhero: Object
    }
};
</script>

<style>

</style>
