import { useState } from 'react';
import HeadingTertiary from '../../../UI/HeadingTertiary/HeadingTertiary';
import styles from './NotAvailable.module.css';

export default function NotAvailable() {
  const [ifNotAvailable, setIfNotAvailable] = useState('');

  return (
    <div className={styles.notAvailable}>
      <HeadingTertiary>
        <label>Если этой еды нет в наличии</label>
      </HeadingTertiary>

      <select
        className={styles.select}
        value={ifNotAvailable}
        onChange={(e) => setIfNotAvailable(e.target.value)}
      >
        <option>Удалить из заказа</option>
        <option>Написать в телеграм</option>
        <option>Позвонить</option>
      </select>
    </div>
  );
}
