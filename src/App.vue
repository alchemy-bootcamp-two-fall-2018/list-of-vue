<template>
    <div id="app"> 
        <Dogs 
            v-bind:dogs="dogs"
            v-bind:selected="selected"
            v-bind:onSelect="handleSelect"/>

    </div>
</template>

<script>
import Dogs from './components/Dogs'; 
import dogs from './dogs';

export default {
    data() {
        return {
            dogs, 
            selected:null
        }; 
    }, 
    components: {
        Dogs
    }, 
    methods: {
        handleSelect(dog) {
            this.selected = dog; 
        }
    }
}; 
</script>
