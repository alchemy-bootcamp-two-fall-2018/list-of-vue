<template>
    <section>
        <div v-if="dog">
            <h2>{{dog.breed}}</h2>
            <p>{{dog.breed}} has a rating of {{dog.rating}}</p>
        </div>
        <div v-else>Select your pup</div>
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
