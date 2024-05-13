import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { CartDetail } from "@/model/types";

export const useCartStore = defineStore("cart", () => {
  // States
  const details = ref(<Array<CartDetail>>[]);

  // Getters
  const cartItemsCount = computed(() => {
    let count = 0;
    details.value.forEach((detail) => {
      count += detail.quantity;
    });
    return count;
  });

  // Actions
  const addProduct = (productId: number) => {
    const detailFound = details.value.find(
      (detail) => detail.productId === productId
    );

    if (detailFound) {
      detailFound.quantity += 1;
    } else {
      details.value.push({
        productId,
        quantity: 1,
      });
    }
  };

  const deleteProduct = (productId: number) => {
    const index = details.value.findIndex(
      (detail) => detail.productId === productId
    );
    details.value.splice(index, 1);
  };

  const increment = (productId: number) => {
    const detailFound = details.value.find(
      (detail) => detail.productId === productId
    );

    if (detailFound) {
      detailFound.quantity += 1;
    }
  };

  const decrement = (productId: number) => {
    const detailFound = details.value.find(
      (detail) => detail.productId === productId
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
    addProduct,
    increment,
    decrement,
    deleteProduct,
  };
});
