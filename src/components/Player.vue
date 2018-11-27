<template>
    <section>
        <div v-if="character">
            <h2>{{character.name}}</h2>
            <p>{{character.name}} the {{character.role}}</p>
            <img id="imgtag" v-bind:src="character.img" style="height: 500px">
        </div>
        <div id="ptag" v-else>Please choose a character for your player</div>
    </section>
</template>

<script>
export default {
    props: {
        character: Object,
    }
};
</script>

<style>
h2 {
    background-color: rgb(80, 80, 80);
    color: white;
    padding: 20px;
    border-radius: 5px;
}

p {
    background: rgb(56, 56, 56);
    color: white;
    padding: 15px;
    border-radius: 5px;
}

#ptag {
    color: white;
    font-size: 2em;
    border: 5px solid white;
}

#imgtag {
    border: 10px solid lightgray;
    border-radius: 5px;
}
</style>