import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './AddToCart.module.css';
import { useMealStore } from '../../../Stores/MealStore';
import { useCartStore } from '../../../Stores/CartStore';

export default function AddToCart() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(1);

  const { activeMeal, selectedToppings } = useMealStore();
  const addItemToCart = useCartStore((state) => state.addItemToCart);
  const { toppings } = activeMeal;

  // memoize mb
  const isAllowedToAdd = !toppings.areRequired || selectedToppings.length >= 1; // toppings.min

  function handleInc() {
    setAmount((amount) => amount + 1);
  }

  function handleDec() {
    if (amount > 1) {
      setAmount((amount) => amount - 1);
    }
  }

  function handleAddToCard() {
    const meal = { ...activeMeal, amount, selectedToppings };
    delete meal.toppings;
    console.log(meal);

    addItemToCart(meal);
    navigate(-1);
  }

  return (
    <div className={styles.addToCart}>
      <div className={styles.btnGroup}>
        <button
          className={`${amount > 1 && styles.btnColor} ${styles.btn}`}
          onClick={handleDec}
        >
          <ion-icon name="remove-outline"></ion-icon>
        </button>
        <span className={styles.counter}>{amount}</span>
        <button className={`${styles.btnColor} ${styles.btn}`} onClick={handleInc}>
          <ion-icon name="add-outline"></ion-icon>
        </button>
      </div>

      <button
        className={`${styles.btnAddToCart} ${isAllowedToAdd && styles.btnColor}`}
        disabled={!isAllowedToAdd}
        onClick={handleAddToCard}
      >
        Добавить в корзину
      </button>
    </div>
  );
}
