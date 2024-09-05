import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../../Stores/CartStore';

import { formatPrice } from '../../../Utils/utils';
import ButtonPrimary from '../../../UI/ButtonPrimary/ButtonPrimary';
import styles from './ViewCart.module.css';

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
        <span className={styles.text}>Перейти в корзину</span>
        <span className={styles.price}>{formatPrice(totalPrice)}</span>
      </ButtonPrimary>
    );
}
