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
//correct dir? lc cacti? refers to file or below component? capitalize Catci.vue & User.vue (also another)
// also does index.html (the one preloaded in public) get auto created with vue and work? or..
import User from './components/User';
//no existy, also see above
import cacti from './cactus-data';
//.js?
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
