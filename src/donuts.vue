<template>
    <ul class= donuts>
        <li v-bind:class="{ donut: true, selected: donut === selected }"    
            v-for-key="donut in donuts"
            v-bind:key"donut.name"
            v-on:click="onSelect(donut)">
            <h3>{{donut.name}} the {{donut.attribute}}</h3>
            <img v-bind:src="donut.image">
        </li>
    </ul>
</template>
                                 
<script>
export default {
    props: {
        donuts: Array,  
        selected: Object, 
        onSelect: Function 
    }
};
</script>  

<style>

.donuts {
    display: flex;
    flex-wrap: wrap;
}
.donut {
    list-style: none;
    width: 200px;
    text-align: center;
    cursor: pointer;
}
</style>