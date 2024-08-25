import { useState } from 'react';
import HeadingTertiary from '../../../UI/HeadingTertiary/HeadingTertiary';
import styles from './NotAvailable.module.css';

export default function NotAvailable() {
  const [ifNotAvailable, setIfNotAvailable] = useState('');

  return (
    <div className={styles.notAvailable}>
      <HeadingTertiary>
        <label>If this product not available</label>
      </HeadingTertiary>

      <select
        className={styles.select}
        value={ifNotAvailable}
        onChange={e => setIfNotAvailable(e.target.value)}
      >
        <option>Remove it from order</option>
        <option>Call me</option>
      </select>
    </div>
  );
}
