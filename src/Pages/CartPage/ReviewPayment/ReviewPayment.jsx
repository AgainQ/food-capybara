import { useCartStore } from '../../../Stores/CartStore';
import { useNavigate } from 'react-router';

import ButtonPrimary from '../../../UI/ButtonPrimary/ButtonPrimary';
import styles from './ReviewPayment.module.css';

export default function ReviewPayment() {
  const navigate = useNavigate();
  const { getItemsTotalPrice } = useCartStore();

  const totalPrice = getItemsTotalPrice();

  function handleClick() {
    navigate('../payment');
  }

  return (
    <div className={styles.reviewPayment}>
      <div className={styles.textBox}>
        <p>
          <span>Total </span>
          <span className={styles.including}>{`(incl. fees and taxes)`}</span>
        </p>

        <p>{`฿ ${totalPrice}.00`}</p>
      </div>

      <ButtonPrimary className="block" onClick={handleClick}>
        Review payment and address
      </ButtonPrimary>
    </div>
  );
}
