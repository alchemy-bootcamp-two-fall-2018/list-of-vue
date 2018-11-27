<template>
    <ul>
        <pre>{{signs}}</pre>
        <li>
            <img src="https://www.jessicaadams.com/wp-content/uploads/2018/02/Ari18profile.jpg">
            <h2>Aries</h2>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        signs: Array
    }
};
</script>

<style>
li {
    position: relative;
    display: inline-block;
    width: 200px;
    height: 200px;
    border: 1px solid black;
    text-align: center;
}

img {
    position: absolute;
    top: 0; left: 0; right: 0;
    margin-top: 10px;
    height: 100%;
    width: auto;
    z-index: -1;
    margin: auto;
}

</style>
