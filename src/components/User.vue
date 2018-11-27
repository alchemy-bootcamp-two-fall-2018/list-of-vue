<template>
    <section>
        <div v-if="plant">
            <h2>You have selected {{plant.name}}!</h2>
            <p>This plant has a filter rating of {{plant.filterNum}}</p>
            <p>{{plant.funFact}}</p>
            <img v-bind:src="plant.image">
        </div>
        <div class="choose" v-else>Please choose a plant</div>
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
.choose {
    font-weight: 300px;
    text-align: center;
    color:red;
}
</style>
