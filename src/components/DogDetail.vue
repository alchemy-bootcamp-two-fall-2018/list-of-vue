<template>
    <section>
        <div v-if="dog">
            <h2>{{dog.name}}</h2>
            <p><span>Breed: </span> {{dog.breed}}</p>
            <p><span>Color: </span> {{dog.color}}</p>
            <img v-bind:src="dog.image">
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
img {
    height: 300px;
    align-items: center;
}
</style>