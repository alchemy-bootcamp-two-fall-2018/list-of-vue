<template>
    <ul class="dogs"> 
      <li v-for="dog in dogs"
          v-bind:class="{ dogs: true, selected: dog === selected }"
          v-bind:key="dog.name">
          v-on:click="onSelect(dog)">
        <img v-bind:src="dog.image"> 
        <h3>{{dog.name}} who is {{dogs.description}}</h3>
      </li>
    </ul>
</template>

<script>
export default {
    props: {
        dogs: Array, 
        selected: Object,
        onSelect: Function
    }
};
</script>

<style>
.dogs {
  display: flex; 
  flex-wrap:wrap;
}
.dogs li {
    list-style: none;
    position: relative;
    height:200px;
    width:250px;
    border: 1px solid #aaa;
    text-align: center;
    margin-right: 3px;
    cursor: pointer;
}
.pirate h3 {
    text-shadow: 1px 1px 1px black;
}
.dogs img {
    height: 70%;
    width: auto;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: auto;
}
</style>
