<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="card">
    <img :src="product.frontImage" alt="Product Image" class="card-image" />
    <div class="card-info">
      <h3>{{ product.brand }}</h3>
      <p>{{ product.name }}</p>
      <p class="price">{{ product.price.toFixed(2) }} €</p>
      <div class="badges">
        <div
          v-for="(badge, index) in product.badges"
          :key="index"
          :class="`badge ${badge.type}`"
        >
          {{ badge.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 16px;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  .card-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  .card-info {
    padding: 12px;

    h3 {
      font-size: 1.2em;
      margin-bottom: 8px;
    }

    p {
      margin-bottom: 4px;
    }

    .price {
      font-weight: bold;
    }

    .badges {
      display: flex;
      gap: 4px;

      .badge {
        padding: 4px;
        border-radius: 4px;
        font-size: 0.8em;

        &.tag {
          background-color: #4caf50;
          color: white;
        }

        &.discount {
          background-color: #2196f3;
          color: white;
        }
      }
    }
  }
}
</style>
