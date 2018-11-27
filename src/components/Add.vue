<template>
    <div >
        <p>Emoji Name: <input v-model="newName"></p>
        <p>Category: <input v-model="newCat"></p>
        <button v-on:click="Add(newEmoji)">Add</button>
    </div>
</template>

<script>

export default {
  data() {
    return {
      newName: '',
      newCat: '',
    };
  },
  computed: {
    newEmoji() {
      return {
        name: this.newName,
        category: this.newCat
      };
    }
  },
  props: {
    Add: Function,
  }
};

</script>
