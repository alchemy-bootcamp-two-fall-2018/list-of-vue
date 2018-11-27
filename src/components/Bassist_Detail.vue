<template>
    <section>
        <div v-if="bassist">
            <h2>{{bassist.name}}</h2>
            <p>{{bassists.name}} plays a {{bassists.gear}}</p>
            <img v-bind:src="bassists.image">
        </div>

        <div v-else>Please select your funky friend</div>
    </section>
</template>

<script>
export default {
    props: {
        bassist: Object
    }
};
</script>

<style>

</style>

