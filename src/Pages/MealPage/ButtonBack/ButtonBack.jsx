import { useMealStore } from '../../../Stores/MealStore';
import { useNavigate } from 'react-router';

import styles from './ButtonBack.module.css';

export default function ButtonBack() {
  const resetActiveMeal = useMealStore((state) => state.resetActiveMeal);
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
    resetActiveMeal();
  }

  return (
    <button onClick={handleClick} className={styles.btn}>
      <ion-icon name="close-outline"></ion-icon>
    </button>
  );
}
