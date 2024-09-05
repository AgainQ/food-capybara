import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../../Stores/CartStore';

import styles from './_CartItems.module.css';

const numbers = Array.from({ length: 11 }, (_, i) => i);

export default function CartItems() {
  const itemsInCart = useCartStore((state) => state.itemsInCart);

  return (
    <div className={styles.box}>
      <div className={styles.cartItems}>
        {itemsInCart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>

      <div className={styles.btnGroup}>
        <ButtonAddMore />
        <ButtonClearCart />
      </div>
    </div>
  );
}

function CartItem({ item }) {
  const { name, img, price, amount } = item;
  const { deleteItemFromCart, setItemAmount } = useCartStore();

  function handleAmountSet(e) {
    const newAmount = parseInt(e.target.value, 10);
    if (newAmount === 0) {
      deleteItemFromCart(item);
      return;
    }

    setItemAmount(item, newAmount);
  }

  return (
    <div className={styles.cartItem}>
      <select className={styles.select} value={amount} onChange={handleAmountSet}>
        {numbers.map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>

      <img className={styles.img} src={img} alt="someImg" />
      <p className={styles.name}>{name}</p>
      <p className={styles.price}>{`฿ ${price}.00`}</p>
    </div>
  );
}

function ButtonAddMore() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  return (
    <button className={styles.btn} onClick={handleClick}>
      Добавить еще
    </button>
  );
}

function ButtonClearCart() {
  const { clearCart } = useCartStore();

  function handleClick() {
    clearCart();
  }

  return (
    <button className={styles.btn} onClick={handleClick}>
      Очистить
    </button>
  );
}
