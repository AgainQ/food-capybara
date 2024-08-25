import { useNavigate } from 'react-router-dom';

import ButtonPrimary from '../../../UI/ButtonPrimary/ButtonPrimary';
import styles from './ViewCart.module.css';
import { useCartStore } from '../../../Stores/CartStore';

export default function ViewCart() {
  const navigate = useNavigate();
  const { itemsInCart, getItemsTotalAmount, getItemsTotalPrice } = useCartStore();

  const totalAmount = getItemsTotalAmount();
  const totalPrice = getItemsTotalPrice();

  function handleClick() {
    navigate('cart');
  }

  if (itemsInCart.length > 0)
    return (
      <ButtonPrimary className="fixed" onClick={handleClick}>
        <span className={styles.totalItems}>{totalAmount}</span>
        <span className={styles.text}>View your cart</span>
        <span className={styles.price}>{`฿ ${totalPrice}.00`}</span>
      </ButtonPrimary>
    );
}
