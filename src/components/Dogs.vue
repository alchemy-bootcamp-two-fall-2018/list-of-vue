<template>
    <ul class="dogs"> 
      <li v-for="dogs in dogs"
          v-bind:class="{ dogs: true, selected: dogs === selected }"
          v-bind:key="dogs.name">
        <img v-bind:src="dogs.image"> 
      </li>
    </ul>
</template>

<script>
export default {
    props: {
        dogs: Array, 
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
