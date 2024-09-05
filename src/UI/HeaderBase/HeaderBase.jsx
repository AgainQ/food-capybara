import { useNavigate } from 'react-router-dom';

import HeadingTertiary from '../HeadingTertiary/HeadingTertiary';
import styles from './HeaderBase.module.css';

export default function HeaderBase({
  heading,
  text = 'Restaurant name',
  icon = 'close',
  className,
}) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <div className={`${styles.header} ${styles[className]}`}>
      <button className={styles.btnBack} onClick={handleClick}>
        <ion-icon name={`${icon}-outline`}></ion-icon>
      </button>

      <div>
        <HeadingTertiary>{heading}</HeadingTertiary>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}

// arrow-back
