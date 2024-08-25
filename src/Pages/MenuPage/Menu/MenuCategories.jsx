import MenuItem from './MenuItem';
import styles from './MenuCategories.module.css';
import { useMenuStore } from '../../../Stores/MenuStore';

export default function MenuCategories() {
  const meals = useMenuStore((state) => state.meals);
  const categories = Object.keys(meals);

  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <MenuCategory meals={meals} category={category} key={category} />
      ))}
    </div>
  );
}

function MenuCategory({ meals, category }) {
  const foodItems = meals[category];

  return (
    <div className={styles.category}>
      <h2 id={category} className={styles.heading}>
        {category}
      </h2>
      {foodItems.map((foodItem) => (
        <MenuItem foodItem={foodItem} key={foodItem.id} />
      ))}
    </div>
  );
}
