import { useCartStore } from '../../../Stores/CartStore';

import styles from './OrderSummary.module.css';
import HeadingTertiary from '../../../UI/HeadingTertiary/HeadingTertiary';
import { useDeliveryStore } from '../../../Stores/DeliveryStore';

export default function OrderSummary() {
  return (
    <div className={styles.box}>
      <HeadingTertiary>Order summary</HeadingTertiary>

      <ItemsList />
      <PriceDetails />
      <AgreeTerms />
    </div>
  );
}

function ItemsList() {
  const { itemsInCart } = useCartStore();

  return (
    <ul className={styles.itemsList}>
      {itemsInCart.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  const { name, amount, price } = item;

  return (
    <li className={styles.item}>
      <span>{`${amount}x ${name}`}</span>
      <span>{`฿ ${price * amount}.00`}</span>
    </li>
  );
}

function PriceDetails() {
  const { getItemsTotalPrice } = useCartStore();
  const itemsTotalPrice = getItemsTotalPrice();

  const { riderTip, selectedDelivery } = useDeliveryStore();
  const { type: delType, price: delPrice } = selectedDelivery;

  return (
    <ul className={styles.priceDetails}>
      <li>
        <span>Subtotal</span>
        <span>{`฿ ${itemsTotalPrice}.00`}</span>
      </li>
      <li>
        <span>{`${delType} delivery`}</span>
        <span>{delPrice === 0 ? 'Free' : `฿ ${delPrice}.00`}</span>
      </li>
      <li>
        <span>Rider tip</span>
        <span>{`฿ ${riderTip.value}.00`}</span>
      </li>
    </ul>
  );
}

function AgreeTerms() {
  return (
    <p className={styles.terms}>
      By completing this order, I agree to all{' '}
      <a className={styles.termsLink} href="placeholder.org">
        terms & conditions
      </a>
      .
    </p>
  );
}
