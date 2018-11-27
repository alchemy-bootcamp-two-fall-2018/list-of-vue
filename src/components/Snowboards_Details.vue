<template>
    <section>
        <div v-if="snowboard">
            <h2>{{snowboard.name}}</h2>
            <p>{{snowboard.role}}</p>
            <img v-bind:src="snowboard.image">
        </div>
        <div v-else>Please choose a snowboard for your player</div>
    </section>
</template>

<script>
export default {
    props: {
        snowboard: Object
    }
};
</script>
<style>
</style>