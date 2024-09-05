import { useDeliveryStore } from '../../../Stores/DeliveryStore';

import HeadingTertiary from '../../../UI/HeadingTertiary/HeadingTertiary';
import { formatPrice } from '../../../Utils/utils';
import styles from './DeliveryOptions.module.css';

export default function DeliveryOptions() {
  const { deliveryOptions } = useDeliveryStore();

  return (
    <div className={styles.box}>
      <HeadingTertiary>Delivery options</HeadingTertiary>

      <ul className={styles.deliveryOptions}>
        {deliveryOptions.map((option) => (
          <DeliveryOption option={option} key={option.type} />
        ))}
      </ul>
    </div>
  );
}

function DeliveryOption({ option }) {
  const { selectedDelivery, selectDelivery } = useDeliveryStore();
  const { type, time, price } = option;

  const isCheck = selectedDelivery.type === type;

  function handleCheck() {
    if (!isCheck) selectDelivery(option);
  }

  return (
    <li>
      <label
        htmlFor={type}
        className={`${styles.deliveryOption} ${isCheck && styles.selected}`}
      >
        <input type="checkbox" id={type} checked={isCheck} onChange={handleCheck} />
        <p className={styles.deliveryType}>{type}</p>
        <p className={styles.deliveryTime}>{`${time} минут`}</p>

        {price > 0 && (
          <p className={styles.deliveryPrice}>{`+ ${formatPrice(price)}`}</p>
        )}
      </label>
    </li>
  );
}
