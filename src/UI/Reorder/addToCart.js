import { useReorderStore } from '../../Stores/ReorderStore';
import { useCartStore } from '../../Stores/CartStore';

export function addToCart(items) {
  const addItemToCart = useCartStore.getState().addItemToCart;
  const { selectedIDs, resetReorderStore } = useReorderStore.getState();

  // Choose only selected items
  const selectedItems = items.filter((item) => selectedIDs.includes(item.id));
  // Remove 'created_at' property
  const updatedItems = selectedItems.map(({ created_at, ...rest }) => rest);

  // Add all items to cart
  updatedItems.forEach((item) => addItemToCart(item));

  // Reset Reorder Store
  resetReorderStore();
}
