<template>
    <section>
        <div v-if="plant">
            <h2>You have selected {{plant.name}}!</h2>
            <p>This plant has a filter rating of {{plant.filterNum}}</p>
            <p>{{plant.funFact}}</p>
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
