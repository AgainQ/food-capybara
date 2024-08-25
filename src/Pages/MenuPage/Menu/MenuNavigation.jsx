import { useMenuStore } from '../../../Stores/MenuStore';

import styles from './MenuNavigation.module.css';

export default function MenuNavigation() {
  const meals = useMenuStore((state) => state.meals);
  const categories = Object.keys(meals);

  return (
    <nav className={styles.categories}>
      {categories.map((category) => (
        <a className={styles.navItem} href={`#${category}`} key={category}>
          {category}
        </a>
      ))}
    </nav>
  );
}
