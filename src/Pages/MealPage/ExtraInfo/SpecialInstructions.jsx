import { useState } from 'react';
import HeadingTertiary from '../../../UI/HeadingTertiary/HeadingTertiary';
import styles from './SpecialInstructions.module.css';

export default function SpecialInstructions() {
  const [request, setRequest] = useState('');
  // !

  function handleTextAreaChange(e) {
    setRequest(e.target.value);
  }

  return (
    <div className={styles.specialInstructions}>
      <HeadingTertiary>
        <label htmlFor="special-request">Особые пожелания</label>
      </HeadingTertiary>
      <p className={styles.text}>
        Специальные запросы выполняются по усмотрению ресторана. Сообщите о них
        здесь.
      </p>
      <textarea
        onChange={handleTextAreaChange}
        className={styles.textArea}
        id="special-request"
        placeholder="Ваши пожелания..."
        maxLength="200"
      ></textarea>
      <p className={styles.charCount}>{`${request.length}/200`}</p>
    </div>
  );
}
