import styles from './Details.module.css';
import { useMealStore } from '../../../Stores/MealStore';

export default function Details() {
  const activeMeal = useMealStore((state) => state.activeMeal);
  const { name, img, ingredients, price } = activeMeal;

  return (
    <>
      <div
        className={styles.imgBox}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className={styles.descriptionBox}>
        <div className={styles.box}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.price}>฿ {`${price}.00`}</p>
        </div>

        <p className={styles.ingredients}>{ingredients.join(', ')}</p>
      </div>
    </>
  );
}
