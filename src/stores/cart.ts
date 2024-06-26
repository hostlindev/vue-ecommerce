import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { CartDetail } from '@/model/types'

export const useCartStore = defineStore('cart', () => {
  // States
  const details = ref(<Array<CartDetail>>[])

  // Actions
  function addProduct(productId: number) {
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
}
  return { details, addProduct }
})
