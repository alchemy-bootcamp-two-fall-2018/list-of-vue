<template>
    <ul>
        <li> v-for="donut in donuts"
             v-bind:key"donut.name"
             v-on:click="handeSelect(donut)">
             <h3>{{donut.name}} the {{donut.attribute}}</h3>
             <img v-bind:src="donut.image">
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        donuts: Array,
        onSelect: Function
    }
};
</script>

<style>
li {
    position:  ;
}