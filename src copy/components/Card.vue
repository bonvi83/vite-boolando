<script>
export default {
    name: 'Product',
    data() {
        return {
            logo: '/img/boolean-logo.png',
            images: [
                {
                    image: '/img/1.webp',
                    imageHovered: '/img/1b.webp'
                },
                {
                    image: '/img/2.webp',
                    imageHovered: '/img2b.webp'
                },
                {
                    image: '/img/3.webp',
                    imageHovered: '/img/3b.webp'
                },
                {
                    image: '/img/4.webp',
                    imageHovered: '/img/4b.webp'
                },
                {
                    image: '/img/5.webp',
                    imageHovered: '/img/5b.webp'
                },
                {
                    image: '/img/6.webp',
                    imageHovered: '/img/6b.webp'
                },
            ],
        }
    },
    methods: {

    }
}
</script>

<template>
    <div class="card" v-for="(image, i) in images" :key="i">
        <figure>
            <img class="model-img" :src="image.image" alt="">
            <img src="" alt="">
        </figure>
        <span>-50%</span>
        <span>Sostenibilità</span>
        <span>&hearts;</span>
        <div class="product-info">
            <span class="name-brand">Levi's</span>
            <span class="info-clothes">RELAXED FIX TEE UNISEX</span>
            <span class="current-price">14,99€</span>
            <span class="previous-price"> 29,99€</span>
        </div>
    </div>
</template>

<style scoped>
.card figure {
    width: 100%;
}

.model-img {
    width: 100%;
}
</style>

