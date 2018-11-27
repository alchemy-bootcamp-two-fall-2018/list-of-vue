<template>
    <ul class="leafygreens">
        <li v-for="leafygreens in leafygreens"
            v-bind:key="leafygreens.name"
        >
            <img v-bind:src="leafygreens.image">
            <h3>{{leafygreens.name}}</h3>
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        leafygreens: Array
    }
};
</script>
 <style>
 </style>