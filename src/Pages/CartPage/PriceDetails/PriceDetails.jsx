import { useCartStore } from '../../../Stores/CartStore';
import { useDeliveryStore } from '../../../Stores/DeliveryStore';
import { formatPrice } from '../../../Utils/utils';
import styles from './PriceDetails.module.css';

export default function PriceDetails() {
  const selectedDelivery = useDeliveryStore((state) => state.selectedDelivery);
  const getItemsTotalPrice = useCartStore((state) => state.getItemsTotalPrice);

  const itemsTotalPrice = getItemsTotalPrice();

  return (
    <div className={styles.details}>
      <div className={styles.detail}>
        <span>Промежуточный итог</span>
        <span>{formatPrice(itemsTotalPrice)}</span>
      </div>

      <div className={styles.detail}>
        <span>{`${selectedDelivery.type} доставка`}</span>
        <span className={`${selectedDelivery.price === 0 && styles.free}`}>
          {selectedDelivery.price === 0 ? 'Бесплатно' : `${selectedDelivery.price}`}
        </span>
      </div>
    </div>
  );
}
