<template>
    <section>
        <div v-if="race">
            <h2>{{race.name}}</h2>
            <h3>{{race.distance}}</h3>
            <h3>{{race.location}}</h3>
            <h3>{{race.qualifier}}</h3>
        </div>
        <div v-else>
            Please select a race for more info
        </div>
    </section>
</template>

<script>
export default {
    props: {
        race: Object
    }
};
</script>

<style>

</style>
