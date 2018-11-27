<template>
    <div>
        <ul>
            <li v-for="player in players"
                v-bind:key="player.name"
                v-bind:class="{ player: true, selected: player === selected}"
                v-on:click="onSelect(player)">

                <h2>{{player.name}}</h2>
                <p>{{player.age}}</p>
                <p>{{player.pref}}</p>

            </li>
        </ul>
    </div>

</template>

<script>
export default {
    props: {
        players: Array,
        selected: Object,
        onSelect: Function

    }
};
</script>

<style>

</style>
