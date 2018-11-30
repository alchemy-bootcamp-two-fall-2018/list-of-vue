<template>
    <ul class="signs">
        <li v-for="sign in signs"
            :key="sign.name"
            @click="onSelect(sign)">
            <img :src="sign.image">
            <h2>{{sign.name}} <br> from <br> {{sign.date}}</h2>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        signs: Array,
        // selected: Object,
        onSelect: Function
    },
};

</script>

<style>
li {
    cursor: pointer;
}

.signs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(200px, auto);
    /* border: 1px solid black; */
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* .signs:hover {
    overflow: visible;
} */

img {
    height: auto;
    width: 300px;
    border: 1px solid black;
    /* z-index: -1;
    object-fit: cover; */
    /* cursor: pointer; */
}

h2 {
    text-align: center;
}

</style>
