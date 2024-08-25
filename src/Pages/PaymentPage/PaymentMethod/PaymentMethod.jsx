import styles from './PaymentMethod.module.css';

import HeadingTertiary from '../../../UI/HeadingTertiary/HeadingTertiary';

export default function PaymentMethod() {
  return (
    <div className={styles.box}>
      <HeadingTertiary>Payment method</HeadingTertiary>
    </div>
  );
}
