import { useState, useMemo } from 'react';

import { useRandomMeals } from '../../../Hooks/useRandomMeals';

import ButtonViewMore from '../ButtonViewMore/ButtonViewMore';
import styles from './Meals.module.css';
import { useMenuStore } from '../../../Stores/MenuStore';

export default function Meals() {
  const meals = useMenuStore((state) => state.meals);
  const [recommendedMeals, setRecommendedMeals] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useRandomMeals(meals, setRecommendedMeals);

  // const displayedMeals = isOpen ? recommendedMeals : recommendedMeals.slice(0, 5);
  const displayedMeals = useMemo(() => {
    return isOpen ? recommendedMeals : recommendedMeals.slice(0, 5);
  }, [isOpen, recommendedMeals]);

  return (
    <div className={styles.meals}>
      {displayedMeals.map((meal) => (
        <RecommendedMeal {...meal} key={meal.id} />
      ))}

      <ButtonViewMore isOpen={isOpen} setIsOpen={setIsOpen} toppingsAmount={10} />
    </div>
  );
}

function RecommendedMeal({ name, img, price, id }) {
  return (
    <label htmlFor={id} className={styles.meal}>
      <input id={id} type="checkbox" />
      <img className={styles.img} src={img} alt="meal" />
      <p className={styles.name}>{name}</p>
      <p className={styles.price}>{`+฿ ${price}`}</p>
    </label>
  );
}
