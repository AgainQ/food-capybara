import { useGetMenu } from '../../../Hooks/useGetMenu';
import { generateRandomMeals } from '../../../Utils/generateRandomMeals';

import Button from './Button';
import HeadingTertiary from '../../../UI/HeadingTertiary/HeadingTertiary';
import styles from './Recommendations.module.css';
import { useMemo } from 'react';

export default function Recommendations() {
  const { menu } = useGetMenu();

  const recommendedMeals = useMemo(() => generateRandomMeals(menu), [menu]);

  return (
    <div className={styles.recommendations}>
      <HeadingTertiary>Popular with your order</HeadingTertiary>
      <p className={styles.text}>Other customers also bought these</p>

      <RecommendedMeals meals={recommendedMeals} />
    </div>
  );
}

function RecommendedMeals({ meals }) {
  return (
    <div className={styles.meals}>
      {meals.map((meal) => (
        <RecommendedMeal meal={meal} key={meal.id} />
      ))}
    </div>
  );
}

function RecommendedMeal({ meal }) {
  const { name, price, img } = meal;

  return (
    <div className={styles.meal}>
      <div className={styles.imgBox}>
        <img className={styles.img} src={img} alt="foodImg" />
        <Button meal={meal} />
      </div>
      <p className={styles.price}>{`฿ ${price}.00`}</p>
      <p className={styles.name}>{name}</p>
    </div>
  );
}
