<script>
import productsJson from '../db.json'
import Card from './Card.vue'

export default {
    name: 'MainContent',
    components: {
        Card,
    },
    data() {
        return {
            products: productsJson,
        }
    },
    methods: {},
}
</script>

<template>
    <div>
        <div class="main-content">
            <div class="container">
                <div class="row">
                    <Card />
                </div>
            </div>
        </div>

    </div>
</template>



