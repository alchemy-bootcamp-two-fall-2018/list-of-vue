<template>
    <div id="app"> 
        <Dogs 
            v-bind:dogs="dogs"/>
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
    }
}; 
</script>
