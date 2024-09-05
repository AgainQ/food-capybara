import { useReorderStore } from '../../Stores/ReorderStore';
import { useGetOrder } from './useGetOrder';
import { addToCart } from './addToCart';

import { formatPrice } from '../../Utils/utils';

import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import HeadingTertiary from '../HeadingTertiary/HeadingTertiary';

import styles from './Reorder.module.css';

export default function Reorder() {
  const resetReorderStore = useReorderStore((state) => state.resetReorderStore);
  const { orderId, selectedIDs } = useReorderStore();
  const { order = {}, isPending } = useGetOrder(orderId);
  const { items = [] } = order;

  function handleAddToCart() {
    addToCart(items);
  }

  function handleBackToMenu() {
    resetReorderStore();
  }

  if (selectedIDs)
    return (
      <div className={styles.reorder}>
        <HeadingTertiary>Заказать снова</HeadingTertiary>
        <OrderItemsList items={items} />

        <div className={styles.btnGroup}>
          <ButtonPrimary className="block" onClick={handleAddToCart}>
            Add to cart
          </ButtonPrimary>
          <ButtonPrimary className="block" onClick={handleBackToMenu}>
            Back to menu
          </ButtonPrimary>
        </div>
      </div>
    );
}

function OrderItemsList({ items }) {
  return (
    <ul className={styles.itemsList}>
      {items.map((item) => (
        <OrderItem item={item} key={item.id} />
      ))}
    </ul>
  );
}

function OrderItem({ item }) {
  const { name, price, amount, id, selectedToppings = [] } = item;

  const selectedIDs = useReorderStore((state) => state.selectedIDs);
  const toggleSelection = useReorderStore((state) => state.toggleSelection);
  const isSelected = selectedIDs.includes(id);

  const toppingsString = selectedToppings.reduce(
    (acc, cur) => acc + cur.name + ', ',
    ''
  );

  function handleToggle() {
    toggleSelection(id);
  }

  return (
    <li>
      <label className={styles.item} htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          checked={isSelected}
          onChange={handleToggle}
        />
        <div className={styles.nameToppingsBox}>
          <p className={styles.name}>{`${amount}x ${name}`}</p>
          {toppingsString && <p className={styles.toppings}>+ {toppingsString}</p>}
        </div>
        <p className={styles.price}>{formatPrice(price * amount)}</p>
      </label>
    </li>
  );
}
