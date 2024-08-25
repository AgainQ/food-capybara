import { useNavigate } from 'react-router-dom';
import { sliceStringWithoutCuttingWords } from '../../../Utils/utils';

import ButtonAddToCart from './ButtonAddToCart';
import styles from './MenuItem.module.css';
import { useMealStore } from '../../../Stores/MealStore';

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
        <p className={styles.price}>{`฿ ${price}.00`}</p>
        <p className={styles.ingredients}>{igredientsString}</p>
      </div>
      <div className={styles.imgBox}>
        <img className={styles.img} src={img} alt={`${name} img`} />
        <ButtonAddToCart foodItem={foodItem} />
      </div>
    </div>
  );
}
