<template>
  <ul class="plants">
    <li v-for="plant in plants"
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
        onSelect: Function
    }
};
</script>

<style>
plants {
  border: 1px solid #aaaa;
  text-align: center
}

</style>
