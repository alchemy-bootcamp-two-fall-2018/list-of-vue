<template>
    <ul>
        <pre>{{races}}</pre>
        <li>
            <h3>Race</h3>
            <img src="../assets/mountainLakes.jpeg"/>
        </li>
    </ul>
</template>

<script>

export default {
    props: {
        races: Array
    }
};
</script>

<style>
    li {
        display:inline-block;
        height: 100px;
        width: 100px;
        border: 1px solid gray;
        text-align: center;
    }

    img {
        height: 100%;
        width: auto;
        position: relative; 
        
    }

</style>
