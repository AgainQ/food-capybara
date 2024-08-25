import { useNavigate } from 'react-router-dom';

import styles from './Button.module.css';
import { useCartStore } from '../../../Stores/CartStore';
import { useMealStore } from '../../../Stores/MealStore';

export default function Button({ meal }) {
  const navigate = useNavigate();
  const { addItemToCart } = useCartStore();
  const { setActiveMeal } = useMealStore();

  function handleClick() {
    if (!meal.toppings.areRequired) {
      addItemToCart(meal);
    } else {
      setActiveMeal(meal);
      navigate('../meal');
    }
  }

  return (
    <button className={styles.btn} onClick={handleClick}>
      <ion-icon name="add-outline"></ion-icon>
    </button>
  );
}
