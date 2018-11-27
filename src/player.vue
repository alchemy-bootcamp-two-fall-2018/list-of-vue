<template>
    <section> 
        <div v-if="donut">
            <h2>{{donut.name}}</h2>
            <p>{{donut.attribute}}</p>
            <img v-bind:src="donut.image">
        </div>
        <div v-else>What kind of donut are you?</div>
    </section>
</template>

<script>
export default {
    props: { 
        donut: Object
    }
};
</script>

<style>
</style>
