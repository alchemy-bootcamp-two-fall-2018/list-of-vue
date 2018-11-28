<template>
    <section> 
        <div v-if="dog">
            <h2>{{dog.name}}</h2>
            <p>{{dog.description}}</p>
            <img id="dog-description" v-bind:src="dog.image">
        </div>
        <div id="dog-player" v-else> You need to choose a doggo! </div>
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
h2 {
    text-align: center;
}
p {
   text-align: center;
}
#dog-description {
    margin: auto;
    width: 50%;
    border: 3px solid grey ;
    padding: 10px;
    display: block; 
}
#dog-player {
    text-align: center; 
}
</style>
