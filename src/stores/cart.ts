import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { CartDetail, Product } from "@/model/types";

export const useCartStore = defineStore("cart", () => {
  // States
  const details = ref([] as CartDetail[]);

  // Getters
  const cartItemsCount = computed(() => {
    let count = 0;
    details.value.forEach((detail) => {
      count += detail.quantity;
    });
    return count;
  });
  const totalAmount = computed(() => {
    let total = 0;
    details.value.forEach((detail) => {
      total += detail.product.price * detail.quantity;
    });
    return total;
  });

  // Actions
  const addProduct = (product: Product) => {
    const detailFound = details.value.find(
      (detail) => detail.product.id === product.id
    );

    if (detailFound) {
      detailFound.quantity += 1;
    } else {
      details.value.push({
        product,
        quantity: 1,
      });
    }
  };

  const deleteProduct = (productId: number) => {
    const index = details.value.findIndex(
      (detail) => detail.product.id === productId
    );
    details.value.splice(index, 1);
  };

  const increment = (productId: number) => {
    const detailFound = details.value.find(
      (detail) => detail.product.id === productId
    );

    if (detailFound) {
      detailFound.quantity += 1;
    }
  };

  const decrement = (productId: number) => {
    const detailFound = details.value.find(
      (detail) => detail.product.id === productId
    );

    if (detailFound) {
      detailFound.quantity -= 1;

      if (detailFound.quantity === 0) {
        deleteProduct(productId);
      }
    }
  };

  return {
    details,
    cartItemsCount,
    totalAmount,
    addProduct,
    increment,
    decrement,
    deleteProduct,
  };
});
