<template>
    <section>
        <div v-if="name">
            <h2>{{sign.name}}</h2>
            <p>From {{sign.date}}</p>
            <img :src="sign.image">
        </div>
        <div v-else>Please choose a sign.</div>
    </section> 
</template>

<script>
export default {
    props: {
        sign: Object
    }
};
</script>

<style>

</style>
