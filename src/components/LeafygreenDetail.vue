<template>
    <section>
        <div v-if="leafygreen">
            <h2>{{leafygreen.name}}</h2>
            <p>Calories per 1 cup: {{leafygreen.calories}}</p>
            <p>{{leafygreen.benefits}}</p>
            <img v-bind:src="leafygreen.image">
        </div>
        <div v-else>Please choose a leafygreen for details</div>
    </section>
</template>
<script>
export default {
    props: {
        leafygreen: Object
    }
};
</script>
 <style>
 </style>