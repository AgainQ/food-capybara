import { useDeliveryStore } from '../../../Stores/DeliveryStore';
import styles from './Delivery.module.css';

export default function Delivery() {
  const selectedDelivery = useDeliveryStore((state) => state.selectedDelivery);
  const { type, time } = selectedDelivery;

  return (
    <div className={styles.box}>
      <div className={styles.delivery}>
        <ion-icon name="bicycle-outline"></ion-icon>

        <div className={styles.details}>
          <p className={styles.text}>Delivery time</p>
          <p className={styles.time}>{`${type} (${time} mins)`}</p>
          <button className={styles.btnChange}>Change</button>
        </div>
      </div>
    </div>
  );
}
