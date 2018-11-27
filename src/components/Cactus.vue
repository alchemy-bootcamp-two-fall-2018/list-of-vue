<template>
    <section class="info">
        <div v-if="plant">
            <h2>{{plant.name}}</h2>
            <h3>{{plant.genus}}</h3>
            <p>{{plant.info}}</p>
            <img v-bind:src="plant.image">
        </div>
        <div v-else>
            Please choose a cactus to learn more!
        </div>
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
    div {
        margin: 10px;
    }
    .info img {
        width: 25%;
    }
</style>
