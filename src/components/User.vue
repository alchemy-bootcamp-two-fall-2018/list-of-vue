<template>
    <section>
        <div v-if="plant">
            <h2>{{plant.name}}</h2>
            <p>{{plant.filterNum}}</p>
            <img v-bind:src="plant.image">
        </div>
        <div v-else>Please choose a plant</div>
    </section>
</template>

<script>
export default {
    props: {
        plant: Object
    }
};
</script>

<style>

</style>
