import { useCartStore } from '../../../Stores/CartStore';

import styles from './OrderSummary.module.css';
import HeadingTertiary from '../../../UI/HeadingTertiary/HeadingTertiary';
import { useDeliveryStore } from '../../../Stores/DeliveryStore';
import { formatPrice } from '../../../Utils/utils';

export default function OrderSummary() {
  return (
    <div className={styles.box}>
      <HeadingTertiary>Заказ</HeadingTertiary>

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
        <span>Промежуточный итог</span>
        <span>{formatPrice(itemsTotalPrice)}</span>
      </li>
      <li>
        <span>{`${delType} доставка`}</span>
        <span>{delPrice === 0 ? 'Бесплатно' : formatPrice(delPrice)}</span>
      </li>
      <li>
        <span>Чаевые курьеру</span>
        <span>{formatPrice(riderTip.value)}</span>
      </li>
    </ul>
  );
}

function AgreeTerms() {
  // temporary deactivate link
  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <p className={styles.terms}>
      Совершив этот заказ вы соглашаетесь со{' '}
      <a className={styles.termsLink} href="placeholder.org" onClick={handleClick}>
        всеми условиями
      </a>
      .
    </p>
  );
}
