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

<style scoped>
.donut-detail {
    height: 60%;
    width: 200px;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    /* margin: auto; */
    margin-bottom: 100px;
}
img {
    width: 300px;
    
}
</style>

