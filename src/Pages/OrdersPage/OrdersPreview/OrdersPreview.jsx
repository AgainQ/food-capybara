import { useGetOrders } from '../useGetOrders';

import HeadingTertiary from '../../../UI/HeadingTertiary/HeadingTertiary';
import Spinner from '../../../UI/Spinner/Spinner';
import styles from './OrdersPreview.module.css';

export default function OrdersPreview() {
  const { orders = [], isPending } = useGetOrders();

  const pendingOrders = orders.filter((order) => order.status === 'pending');
  const completedOrders = orders.filter((order) => order.status === 'completed');

  if (isPending) return <Spinner />;

  return (
    <div className={styles.box}>
      <HeadingTertiary>Active orders</HeadingTertiary>
      <div className={styles.orders}>
        {pendingOrders.map((order) => (
          <Order order={order} key={order.id} />
        ))}
      </div>

      <HeadingTertiary>Past orders</HeadingTertiary>
      <div className={styles.orders}>
        {completedOrders.map((order) => (
          <Order order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
}

function Order({ order }) {
  const imgUrl = order.items[0].img;
  const itemsString = order.items.reduce((acc, cur) => acc + cur.name + ', ', '');

  return (
    <div className={styles.order}>
      <header className={styles.header}>
        <img className={styles.img} src={imgUrl} alt="order-image" />

        <div className={styles.summary}>
          <p className={styles.name}>The Green House Cafe</p>
          <p className={styles.price}>{`฿ ${order.totalPrice}.00`}</p>
          <p className={styles.delivered}>Delivered on 03 Sep, 15:10</p>
          <p className={styles.items}>{itemsString}</p>
        </div>
      </header>
    </div>
  );
}
