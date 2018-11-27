<template>
  <ul class="plants">
    <li v-for="plant in plants"
      v-bind:class="{ plant: true, selected: plant === selected }"
        v-bind:key="plant.name"
        v-on:click="onSelect(plant)">
      <h3>{{plant.name}} rates {{plant.filterNum}} for filter</h3>
      <img v-bind:src="plant.image">
    </li>
  </ul>
</template>

<script>
export default {
    props: {
        plants: Array,
        selected: Object,
        onSelect: Function
    }
};
</script>

<style>
plants {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #aaaa;
  text-align: center;
}
plant {
  list-style: none;
}
img {
  width: 200px;
}

</style>
