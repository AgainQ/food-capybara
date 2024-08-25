import { useCartStore } from '../../../Stores/CartStore';
import { useDeliveryStore } from '../../../Stores/DeliveryStore';
import styles from './PriceDetails.module.css';

export default function PriceDetails() {
  const selectedDelivery = useDeliveryStore((state) => state.selectedDelivery);
  console.log(selectedDelivery);
  const getItemsTotalPrice = useCartStore((state) => state.getItemsTotalPrice);

  const totalPrice = getItemsTotalPrice();

  return (
    <div className={styles.details}>
      <div className={styles.detail}>
        <span>Subtotal</span>
        <span>{`฿ ${totalPrice}.00`}</span>
      </div>

      <div className={styles.detail}>
        <span>{`${selectedDelivery.type} delivery`}</span>
        <span className={`${selectedDelivery.price === 0 && styles.free}`}>
          {selectedDelivery.price === 0 ? 'Free' : `${selectedDelivery.price}`}
        </span>
      </div>
    </div>
  );
}
