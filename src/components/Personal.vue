<template>
    <section>
        <div v-if="guitarist">
            <h2>You Chose {{guitarist.name}}</h2>
            <p>A {{guitarist.handed}} handed guitarist from {{guitarist.from}}</p>
        </div>
        <div v-else><h3>Choose your favorite guitarist!</h3> </div>
    </section>
</template>

<script>
export default {
    props: {
        guitarist: Object
    }
};
</script>

<style>

</style>;
