<template>
    <div id="app">
        <Signs v-bind:signs="signs"/>
    </div>
</template>

<script>
import Signs from './components/Signs';
import signs from './signs-data';

export default {
    data() {
        return {
            signs,
            selected: null
        };
    },
    components: {
        Signs
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
