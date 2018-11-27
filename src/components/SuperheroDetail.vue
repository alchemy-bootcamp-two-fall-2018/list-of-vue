<template>
    <section>
        <div v-if="superhero" class="superhero-detail">
            <h2>{{superhero.name}}</h2>
            <img v-bind:src="superhero.image">
            <p><span>Location: </span> {{superhero.location}}</p>
            <p><span>Powers: </span> {{superhero.powers}}</p>
            <p><span>Real Name: </span> {{superhero.realname}}</p>
        </div>
        <div class="message" v-else>Click on a superhero to view their details</div>
    </section>
</template>

<script>
export default {
    props: {
        superhero: Object
    }
};
</script>

<style>
.superhero-detail {
    list-style: none;
    position: relative;
    width: 400px;
    height: 650px;
    border: 3px solid black;
    text-align: center;
    margin: 10px auto;
    padding: 0px 20px;
    cursor: pointer;
}

.superhero-detail img {
    height: 60%;
    width: auto;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: auto;
}

.superhero-detail h2 {
    text-shadow: 2px 2px 2px gray;
    font-size: 1.8em;
}

.superhero-detail p {
    font-size: 1.2em;
}

.superhero-detail span {
    font-weight: bold;
}

.message {
    margin-top: 30px;
    font-size: 1.5em;
}
</style>
