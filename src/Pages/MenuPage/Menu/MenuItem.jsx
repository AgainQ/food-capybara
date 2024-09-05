import { useNavigate } from 'react-router-dom';

import { useMealStore } from '../../../Stores/MealStore';
import { sliceStringWithoutCuttingWords, formatPrice } from '../../../Utils/utils';

import ButtonAddToCart from './ButtonAddToCart';
import styles from './MenuItem.module.css';

export default function MenuItem({ foodItem }) {
  const navigate = useNavigate();
  const setActiveMeal = useMealStore((state) => state.setActiveMeal);

  const { name, price, img, ingredients } = foodItem;
  const igredientsString = sliceStringWithoutCuttingWords(ingredients.join(' '), 60);

  function handleClick() {
    setActiveMeal(foodItem);
    navigate('meal');
  }

  return (
    <div onClick={handleClick} className={styles.menuItem}>
      <div className={styles.textBox}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.price}>{formatPrice(price)}</p>
        <p className={styles.ingredients}>{igredientsString}</p>
      </div>
      <div className={styles.imgBox}>
        <img className={styles.img} src={img} alt={`${name} img`} />
        <ButtonAddToCart foodItem={foodItem} />
      </div>
    </div>
  );
}
