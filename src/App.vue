<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import AppProduct from "./components/AppProduct.vue";

export default {
  data() {
    return {};
  },

  components: {
    AppHeader,
    AppMain,
    AppFooter,
    AppProduct,
  },
};
</script>

<template>
  <app-header></app-header>
  <app-main></app-main>
  <app-footer></app-footer>
  <app-product>Prodotti</app-product>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
