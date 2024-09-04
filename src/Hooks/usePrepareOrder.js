import { useCartStore } from '../Stores/CartStore';
import { useDeliveryStore } from '../Stores/DeliveryStore';
import { generateRandomId } from '../Utils/utils';

export function usePrepareOrder() {
  const { itemsInCart, getItemsTotalPrice } = useCartStore();
  const { selectedDelivery, riderTip, deliveryInstructions } = useDeliveryStore();

  const itemsTotalPrice = getItemsTotalPrice();
  const totalPrice = itemsTotalPrice + selectedDelivery.price + riderTip.value;

  const order = {
    id: generateRandomId(),
    items: itemsInCart,
    totalPrice,
    riderTip: riderTip.value,
    deliveryPrice: selectedDelivery.price,
    deliveryInstructions,
    status: 'completed',
  };

  return order;
}
