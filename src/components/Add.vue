<template>
    <div >
        <p>Emoji Name: <input v-model="newName"></p>
        <p>Category: <input v-model="newCat"></p>
        <p>Image URL: <input v-model="newImage"></p>
        <button v-on:click="Add(newEmoji)">Add</button>
    </div>
</template>

<script>

export default {
  data() {
    return {
      newName: '',
      newCat: '',
      newImage: ''
    };
  },
  computed: {
    newEmoji() {
      return {
        name: this.newName,
        category: this.newCat,
        image: this.newImage
      };
    }
  },
  props: {
    Add: Function,
  }
};

</script>
