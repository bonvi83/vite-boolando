<script>
export default {
  props: {
    products: Array,
  },
};
</script>

<template>
  <ul class="product-list">
    <li v-for="product in products" :key="product.id" class="product-item">
      <img
        :src="product.frontImage"
        alt="Product Image"
        class="product-image"
      />
      <div class="product-details">
        <span class="product-name">{{ product.name }}</span>
        <span class="product-price">{{ product.price }}€</span>
      </div>
    </li>
  </ul>
</template>

<style lang="scss">
.product-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product-item {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  width: 200px;

  .product-image {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  .product-details {
    display: flex;
    flex-direction: column;
    align-items: center;

    .product-name {
      font-weight: bold;
      margin-bottom: 5px;
    }

    .product-price {
      color: #e44d26;
      font-size: 1.2em;
    }
  }
}
</style>
