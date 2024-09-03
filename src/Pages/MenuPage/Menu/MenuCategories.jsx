import { useGetMenu } from '../../../Hooks/useGetMenu';
import Spinner from '../../../UI/Spinner/Spinner';

import MenuItem from './MenuItem';
import styles from './MenuCategories.module.css';

export default function MenuCategories() {
  const { menu = [], isPending } = useGetMenu();
  const categories = Object.keys(menu);

  if (isPending) return <Spinner />;

  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <MenuCategory menu={menu} category={category} key={category} />
      ))}
    </div>
  );
}

function MenuCategory({ menu, category }) {
  const foodItems = menu[category];

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
