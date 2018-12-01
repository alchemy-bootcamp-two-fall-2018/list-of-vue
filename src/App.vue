<template>
    <div id="app">
        <Signs
            :signs="signs"
            :selected="selected"
            :onSelect="handleSelect" />
        <Sign
            :sign="selected"
            /> 
    </div>
</template>

<script>
import Signs from './components/Signs';
import Sign from './components/Sign';
import signs from './signs-data';

export default {
    data() {
        return {
            signs,
            selected: null
        };
    },
    components: {
        Signs,
        Sign
    },
    methods: {
        handleSelect(sign) {
            console.log('user selected sign', sign.name);
        }
    }
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
