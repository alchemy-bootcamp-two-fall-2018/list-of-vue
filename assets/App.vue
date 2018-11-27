<template>
  <div id="app">
    <Cacti 
        v-bind:cacti="cacti"
        v-bind:selected="selected"
        v-bind:onSelect="handleSelect"/>
    <User
        v-bind:cactus="selected"/>
  </div>
</template>

<script>
import Cacti from './components/Cacti';
import User from './components/User';
import cacti from './cactus-data';
export default {
    data() {
        return {
            cacti,
            selected: null
        };
    },
    components: {
        Cacti,
        User
    },
    methods: {
        handleSelect(cactus) {
            this.selected = cactus;
        }
    }
};
</script>