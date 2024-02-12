<script>
export default {
    name: 'PageFooter',
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<template>
    <footer class="page-footer">
        <div class="container">
            <div class="footer-info">
                <div class="brand-info">
                    <h3 class="info-title">Boolean s.r.l.</h3>
                    <ul class="footer-menu">
                        <li class="footer-menu-items"><a href="#">informazioni legali</a></li>
                        <li class="footer-menu-items"><a href="#">informativa sulla privacy</a></li>
                        <li class="footer-menu-items"><a href="#">diritto di recesso</a></li>
                    </ul>
                </div>

                <div class="find-us">

                    <h3 class="info-title">Trovaci anche su:</h3>
                    <ul class="footer-social-icons">
                        <li class="footer-icon-items"><a href="#">icon</a></li>
                        <li class="footer-icon-items"><a href="#">icon</a></li>
                        <li class="footer-icon-items"><a href="#">icon</a></li>
                    </ul>

                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.page-footer {
    background-color: black;
    padding: 30px 0;
}

.info-title {
    color: white;
    padding: 0 10px;
    margin-bottom: 40px;
}

.footer-info {
    display: flex;
    justify-content: space-between;
}

.footer-menu,
.footer-social-icons {
    display: flex;
}

.footer-menu-items,
.footer-icon-items {
    padding: 5px 10px;
}
</style>