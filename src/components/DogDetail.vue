<template>
    <section>
        <div v-if="dog">
            <h2>{{dog.name}}</h2>
            <p><span>Breed: </span> {{dog.breed}}</p>
            <p><span>Color: </span> {{dog.color}}</p>
            <img v-bind:src="dog.name">
        </div>
        <div v-else>Select a dog to view detail</div>
    </section>
</template>

<script>
export default {
    props: {
        dog: Object
    }
};
</script>

<style>

</style>