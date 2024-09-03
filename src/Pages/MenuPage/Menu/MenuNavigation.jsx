import { useGetMenu } from '../../../Hooks/useGetMenu';

import styles from './MenuNavigation.module.css';

export default function MenuNavigation() {
  const { menu } = useGetMenu();
  const categories = Object.keys(menu);

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
