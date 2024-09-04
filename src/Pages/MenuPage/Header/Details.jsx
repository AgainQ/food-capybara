import styles from './Details.module.css';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

export default function Details() {
  // ratings, deliveryTime
  const navigate = useNavigate();
  function handleClick() {
    navigate('orders');
  }

  return (
    <div className={styles.details}>
      <div className={styles.detail}>
        <p className={styles.detailText}>
          <ion-icon name="star-outline"></ion-icon>
          <span>5.0</span>
          <span className={styles.ratings}>&middot; 37 ratings</span>
        </p>
        <Button text="See review" />
      </div>

      <div className={styles.detail}>
        <p className={styles.detailText}>
          <ion-icon name="time-outline"></ion-icon>
          <span>Delivery: 5-20 minutes</span>
        </p>
        <Button text="Change" />
      </div>

      <div className={styles.detail}>
        <p className={styles.detailText}>
          <ion-icon name="pricetags-outline"></ion-icon>
          <span>Availables deals</span>
        </p>
      </div>

      <button className={styles.ordersBtn} onClick={handleClick}>
        ORDERS
      </button>
    </div>
  );
}
