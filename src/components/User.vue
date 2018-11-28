<template>
    <section>
        <div v-if="cactus">
            <h2>{{cactus.name}}</h2>
            <p>{{cactus.huggability}}</p>
            <img v-bind:src="cactus.image">
        </div>
    </section>
</template>
            


<script>
export default {
    props: {
        cactus: Object
    }
};
</script>
            
<style>
    
</style>
            "