<template>
<ul class="animals">
    <li v-for="animal in animals"
    v-bind:class="{ animal: true, selected: animal === selected }"
    v-bind:key="animal.name"
    v-on:click="onSelect(animal)">
    <img v-bind:src="animal.image">
    <h3>{{ animal.name}} is a {{ animal.species}}</h3>
    </li>
</ul>
</template>

<script>
export default {
    name: 'Animals',
    props: {
        animals: Array,
        selected: Object,
        onSelect: Function
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.animals img {
    width: 100px;
}
</style>