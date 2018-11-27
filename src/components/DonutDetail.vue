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
.donut-detail img {
    height: 60%;
    width: auto;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: auto;
}
</style>
