import { useCartStore } from '../Stores/CartStore';
import { useDeliveryStore } from '../Stores/DeliveryStore';
import { useMealStore } from '../Stores/MealStore';

export function resetStores() {
  useCartStore.getState().clearCart();
  useMealStore.getState().resetActiveMeal();
  useDeliveryStore.getState().resetDeliveryStore();
}
