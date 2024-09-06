import Navigation from './Navigation/_Navigation';
import Header from './Header/_Header';
import Menu from './Menu/_Menu';
import ViewCart from './ViewCart/ViewCart';
import Reorder from '../../UI/Reorder/Reorder';

import styles from './MenuPage.module.css';

export default function MenuPage() {
  return (
    <div className={styles.menuPage}>
      <Navigation />
      <Header />
      <Menu />

      <Reorder />
      <ViewCart />
    </div>
    //
  );
}
