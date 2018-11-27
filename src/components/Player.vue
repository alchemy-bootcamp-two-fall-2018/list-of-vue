<template>
    <section>
        <div id="player" v-if="dog">
            <h2>{{dog.breed}}</h2>
            <p>{{dog.breed}} has a rating of {{dog.rating}}</p>
        </div>
        <div id="placeholder" v-else>Select your pup</div>
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
    #player {
        text-align: center;
        font-size: 3vw;
    }
    #placeholder {
        text-align: center;
        font-size: 8vw;
    }
</style>
