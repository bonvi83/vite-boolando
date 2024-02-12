<script>
    export default {
        data() {
            return {
                links: [
                    {
                        text: "Donna",
                        url: "#",
                        current: false,
                    },
                    {
                        text: "Uomo",
                        url: "#",
                        current: false,
                    },
                    {
                        text: "Bambini",
                        url: "#",
                        current: false,
                    },
                ],
            };
        },
    };
</script>

<template>
    <header> 
        <div class="header-container">
            <ul>
                <a href=""><li v-for="link in links">{{ link.text }}</li></a>
            </ul>
            <div class="header-logo">
                <img src="../assets/img/boolean-logo.png" alt="" >
            </div>
            <div class="header-icons">
                <i class="fa-regular fa-user"></i>
                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-bag-shopping"></i>
            </div>
        </div>
        
    </header>
</template>

<style scoped>

</style>



















</script>