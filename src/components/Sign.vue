<template>
    <section class="detail">
        <div v-if="sign">
            <h2 class="detail-title">{{sign.name}}</h2>
            <img :src="sign.image">
            <p>{{sign.description}}</p>
            <p class="credits">
                Credits: <br>
                Images from <a href="https://www.jessicaadams.com/" target="_blank">Jesica Adam</a><br>
                Moon descriptions by <a href="https://www.forrestastrology.com/blogs/astrology/the-moon-through-the-twelve-signs-by-steven-forrest" target="_blank">Steven Forrest</a>
            </p>
        </div>
        <div class="choose" v-else><strong>Choose a sign</strong></div>
    </section> 
</template>

<script>
export default {
    props: {
        sign: Object
    }
};
</script>

<style>

</style>
