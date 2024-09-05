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
          <span className={styles.ratings}>&middot; 37 отзывов</span>
        </p>
        <Button text="Посмотреть" />
      </div>

      <div className={styles.detail}>
        <p className={styles.detailText}>
          <ion-icon name="time-outline"></ion-icon>
          <span>Доставка: 30-60 минут</span>
        </p>
        <Button text="Изменить" />
      </div>

      {/* <div className={styles.detail}>
        <p className={styles.detailText}>
          <ion-icon name="pricetags-outline"></ion-icon>
          <span>Availables deals</span>
        </p>
      </div> */}

      <button className={styles.ordersBtn} onClick={handleClick}>
        Прошлые заказы
      </button>
    </div>
  );
}
