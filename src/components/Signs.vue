<template>
    <ul class="signs">
        <li v-for="sign in signs"
            :class="{ sign: true, selected: sign === selected }"
            :key="sign.name"
            @click="onSelect(sign)">
            <img :src="sign.image">
            <h2>{{sign.name}}</h2>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        signs: Array,
        selected: Object,
        onSelect: Function
    },
};

</script>

<style>
ul {
    float: left;
}

.signs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(150px, auto);
    /* border: 1px solid black; */
    list-style: none;
    text-align: center;
    font-size: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 100px;
}

img {
    height: auto;
    width: 150px;
    /* border: 1px solid black; */
    cursor: pointer;
    text-align: center;
}

h2 {
    text-align: center;
}

.detail, .detail-title {
    text-align: left;
    margin-right: 40px;
}

.choose {
    margin-top: 25px;
    font-size: 25px;
}

.credits {
    font-size: 11px;
}
</style>
