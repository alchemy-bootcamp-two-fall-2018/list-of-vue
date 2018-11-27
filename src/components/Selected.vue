<template>
    <div v-if="player">
        <img v-bind:src="player.img">
        <h2>{{player.name}}</h2>
        <p>{{player.age}}</p>
        <p>{{player.pref}}</p>
    </div>
    <div v-else> Place your bets</div>
</template>

<script>
export default {
    props: {
        player: Object

    }

};
</script>

<style>

</style>
