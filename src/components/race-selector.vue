<template>
    <section class="selected">
        <div v-if="race">
            <h2>{{race.name}}</h2>
            <h3>Distance</h3>
            <h4 v-for="distance in race.distance"
                v-bind:key="distance">
                {{distance}}</h4>
            <h4>{{race.location}}</h4>
            <h4>{{race.qualifier}}</h4>
        </div>
        <div v-else>
            <h2 id="select">Please select a race for more info</h2>
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

<style scoped>
#select {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;
};
.selected {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;
    border: sold 2px black;
}

</style> 
