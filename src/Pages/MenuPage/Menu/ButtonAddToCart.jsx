import { useCartStore } from '../../../Stores/CartStore';
import { useMealStore } from '../../../Stores/MealStore';
import { useNavigate } from 'react-router-dom';

import styles from './ButtonAddToCart.module.css';

export default function ButtonAddToCart({ foodItem }) {
  const navigate = useNavigate();
  const { itemsInCart, addItemToCart, decreaseItemAmount, deleteItemFromCart } =
    useCartStore();
  const setActiveMeal = useMealStore((state) => state.setActiveMeal);

  // Find the item in the cart to get the current amount
  const cartItem = itemsInCart.find((item) => item.id === foodItem.id);
  const amount = cartItem ? cartItem.amount : 0;

  function handleOpen(e) {
    e.stopPropagation();

    if (!foodItem.toppings.areRequired) {
      addItemToCart(foodItem);
    } else {
      setActiveMeal(foodItem);
      navigate('meal');
    }
  }

  function handleDec(e) {
    e.stopPropagation();

    if (amount > 1) {
      decreaseItemAmount(foodItem);
    } else if (amount === 1) {
      deleteItemFromCart(foodItem);
    }
  }

  function handleInc(e) {
    e.stopPropagation();
    addItemToCart(foodItem);
  }

  // If the amount is zero, display the "Add to Cart" button
  if (amount === 0) {
    return (
      <button className={`${styles.btn} ${styles.btnOpen}`} onClick={handleOpen}>
        <ion-icon name="add-outline"></ion-icon>
      </button>
    );
  }

  // If the amount is greater than zero, display the increment/decrement controls
  return (
    <div className={styles.btnGroup}>
      <button className={styles.btn} onClick={handleDec}>
        <ion-icon name="remove-outline"></ion-icon>
      </button>
      <span className={styles.counter}>{amount}</span>
      <button className={styles.btn} onClick={handleInc}>
        <ion-icon name="add-outline"></ion-icon>
      </button>
    </div>
  );
}
