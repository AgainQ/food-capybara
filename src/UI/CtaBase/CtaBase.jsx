import { useCartStore } from '../../Stores/CartStore';
import { useDeliveryStore } from '../../Stores/DeliveryStore';
import { formatPrice } from '../../Utils/utils';

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
          <span>Итого </span>
          <span className={styles.including}>{`(включая доставку и чаевые)`}</span>
        </p>

        <p>{formatPrice(totalPrice)}</p>
      </div>

      <ButtonPrimary className="block" onClick={onClick}>
        {btnText}
      </ButtonPrimary>
    </div>
  );
}
