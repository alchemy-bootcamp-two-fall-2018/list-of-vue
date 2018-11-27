<template>
  <div id="detail" v-if="animal">
      <h2>{{animal.name}} is currently {{animal.status}}</h2>
  </div>
  <div id="initial" v-else>Choose an animal!</div>
</template>

<script>
export default {
    name: 'Detail',
    props: {
        animal: Object
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
</style>