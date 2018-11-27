<template>
    <section>
        <div v-if="dog" class="dog-detail">
            <h2>{{dog.name}}</h2>
            <img v-bind:src="dog.name">
            <p><span>Breed: </span> {{dog.breed}}</p>
            <p><span>Color: </span> {{dog.color}}</p>
        </div>
        <div class="message" v-else>Select a dog to view detail</div>
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
