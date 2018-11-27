<template>
    <section>
        <div v-if="guitarist">
            <h2>You Chose {{guitarist.name}}</h2>
            <p>A {{guitarist.handed}} handed guitarist from {{guitarist.from}}</p>
        </div>
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
