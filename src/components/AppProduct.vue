<script>
import axios from "axios";
import ProductList from "@/components/ProductList.vue";

export default {
  components: {
    ProductList,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    axios.get("/products.json").then((response) => {
      this.products = response.data.products;
    });
  },
};
</script>

<template>
  <div id="app">
    <h1>Prodotti</h1>
    <ProductList :products="products" />
  </div>
</template>

<style lang="scss">
#app {
  text-align: center;
  padding: 20px;
}
</style>
