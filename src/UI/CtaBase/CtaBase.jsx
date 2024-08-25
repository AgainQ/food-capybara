import { useCartStore } from '../../Stores/CartStore';
import { useDeliveryStore } from '../../Stores/DeliveryStore';

import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import styles from './CtaBase.module.css';

// onClick / not navigateTo
export default function CtaBase({ btnText, onClick }) {
  const { getItemsTotalPrice } = useCartStore();
  const { selectedDelivery, riderTip } = useDeliveryStore();

  const itemsTotalPrice = getItemsTotalPrice();
  const totalPrice = itemsTotalPrice + selectedDelivery.price + riderTip.value;

  return (
    <div className={styles.ctaBox}>
      <div className={styles.textBox}>
        <p>
          <span>Total </span>
          <span className={styles.including}>{`(incl. fees and taxes)`}</span>
        </p>

        <p>{`฿ ${totalPrice}.00`}</p>
      </div>

      <ButtonPrimary className="block" onClick={onClick}>
        {btnText}
      </ButtonPrimary>
    </div>
  );
}
