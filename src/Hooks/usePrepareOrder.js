import { useCartStore } from '../Stores/CartStore';
import { useDeliveryStore } from '../Stores/DeliveryStore';

import { generateRandomId } from '../Utils/utils';

export function usePrepareOrder() {
  const { itemsInCart, getItemsTotalPrice } = useCartStore();
  const { selectedDelivery, riderTip } = useDeliveryStore();

  const itemsTotalPrice = getItemsTotalPrice();
  const totalPrice = itemsTotalPrice + selectedDelivery.price + riderTip.value;

  const priceDetails = {
    totalPrice,
    riderTip,
    deliveryPrice: selectedDelivery.price,
  };

  const order = {
    id: generateRandomId(),
    items: itemsInCart,
    deliveryDetails: selectedDelivery,
    priceDetails,
  };

  return order;
}
