<template>
    <section> 
        <div v-if="dog">
            <h2>{{dog.name}}</h2>
            <p>{{dog.description}}</p>
            <img v-bind:src="dog.image">
        </div>
    </section>
</template>

<script> 
export default {
    props: {
        dog: Object
    }
};
</script>