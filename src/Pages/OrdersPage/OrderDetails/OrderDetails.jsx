import { useParams } from 'react-router-dom';

// import { useReorderStore } from '../../../Stores/ReorderStore';
import { useGetOrder } from '../../../UI/Reorder/useGetOrder';

import HeaderBase from '../../../UI/HeaderBase/HeaderBase';
import Spinner from '../../../UI/Spinner/Spinner';
import styles from './OrderDetails.module.css';

export default function OrderDetails() {
  // const orderId = useReorderStore((state) => state.orderId);
  const { id } = useParams();
  const { order = {}, isPending } = useGetOrder(id);

  const { items, totalPrice, deliveryPrice } = order;

  if (isPending) return Spinner;

  return (
    <div className={styles.OrderDetails}>
      <HeaderBase heading="Заказ" text="" icon="arrow-back" />

      <Header order={order} />

      <div className={styles.body}>
        <ItemsList order={order} />
        <PriceDetails order={order} />
        <PaymentDetails order={order} />
      </div>
    </div>
  );
}

function Header({ order }) {
  const { id } = order;

  return (
    <header className={styles.header}>
      <h3 className={styles.heading}>Заказ # {id}</h3>
      <p className={styles.deliveredOn}>Доставлено 3 Сентября, 15:10</p>

      <div className={styles.infoBox}>
        <ion-icon name="location-outline"></ion-icon>

        <div className={styles.deliveryText}>
          <p className={styles.deliveredTo}>Заказано из</p>
          <p className={styles.restName}>Sushi Village</p>
        </div>
      </div>

      <div className={styles.infoBox}>
        <ion-icon name="location-outline"></ion-icon>

        <div className={styles.deliveryText}>
          <p className={styles.deliveredTo}>Доставлено по адресу</p>
          <p className={styles.address}>Улица Пушкина, 54</p>
        </div>
      </div>
    </header>
  );
}

function ItemsList({ order }) {
  const { items } = order;

  return (
    <ul className={styles.itemsList}>
      {items.map((item) => (
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

function PriceDetails({ order }) {
  const { totalPrice, deliveryPrice, riderTip } = order;

  const itemsTotalPrice = totalPrice - deliveryPrice - riderTip;

  return (
    <ul className={styles.priceDetails}>
      <li>
        <span>Промежуточный итог</span>
        <span>{`฿ ${itemsTotalPrice}.00`}</span>
      </li>
      <li>
        <span>{`Обычная доставка`}</span>
        <span>{deliveryPrice === 0 ? 'Бесплатно' : `฿ ${deliveryPrice}.00`}</span>
      </li>
      <li>
        <span>Чаевые</span>
        <span>{`฿ ${riderTip}.00`}</span>
      </li>
      <li className={styles.total}>
        <span>Итого</span>
        <span>{`฿ ${totalPrice}.00`}</span>
      </li>
    </ul>
  );
}

function PaymentDetails({ order }) {
  return (
    <div className={styles.paymentDetailsBox}>
      <h4 className={styles.paidWith}>Способ оплаты</h4>

      <div className={styles.paymentDetails}>
        <p className={styles.card}>
          <ion-icon name="card-outline"></ion-icon>
          <span>Кредитная карта</span>
        </p>
        <p className={styles.check}>
          <ion-icon name="receipt-outline"></ion-icon>
          <span>Сохранить чек</span>
        </p>
      </div>
    </div>
  );
}
