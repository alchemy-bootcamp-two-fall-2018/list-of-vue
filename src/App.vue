<template>
    <div id="app"> 
        <h1>Please Select a Doggo!</h1>
        <Dogs 
            v-bind:dogs="dogs"
            v-bind:selected="selected"
            v-bind:onSelect="handleSelect"/>
        <Player
            v-bind:dog="selected"/>

    </div>
</template>

<script>
import Dogs from './components/Dogs'; 
import dogs from './dogs';
import Player from './components/Player';

export default {
    data() {
        return {
            dogs, 
            selected:null
        }; 
    }, 
    components: {
        Dogs, 
        Player
    }, 
    methods: {
        handleSelect(dog) {
            this.selected = dog === this.selected ? null : dog; 
        }
    }
}; 
</script>
<style>
h1 {
    text-align: center;
}
</style>
