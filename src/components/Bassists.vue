<template>
  <ul class="bassists">
      <li v-for="bassist in bassists"
          v-bind:class="{ bassist: true, selected: bassist === selected }"
          v-bind:key="bassist.name"
          v-on:click="onSelect(bassist)">
          <img v-bind:src="bassist.image">
          <h3>{{bassist.name}} shreds on a {{bassist.gear}}</h3>
     </li>
    </ul>
</template>

<script>
export default {
    props: {
        bassists: Array,
        selected: Object,
        onSelect: Function
    }
};
</script>

<style>
    .img{
        height: 200px;
        width: auto;
    }
    .bassists {
        display: flex;
        flex-wrap: wrap;
        height: 200px;
        width: auto;
    }

    .bassist {
        list-style: none;
        position: relative;
        width: 200px;
        height: 200px;
        border: 1px solid #aaa;
        text-align: center;
        margin-right: 3px;
        cursor: pointer;
    }

    .bassist h3{
        text-shadow: 1px 1px 1px white;
    }
</style>

