<template>
  <ul class="guitarists">
      <li v-for="guitarist in guitarists"
          v-bind:key="guitarist.name"
          v-bind:class="{ guitarist: true, selected: guitarist === selected }"
          v-on:click="onSelect(guitarist)">
          <img v-bind:src="guitarist.img">
          <h2>{{guitarist.name}}</h2>
      </li>
  </ul>
</template>

<script>
export default {
    props: {
        guitarists: Array,
        selected: Object,
        onSelect: Function
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
img {
  width: 300px;
  height: 300px;
  border-radius: 100%;
  opacity: .5;
}
img:hover {
  opacity: 1;
}
.selected {
  color: green;
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
</style>
