import styles from './_Navigation.module.css';
import NavButton from './NavButton';

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <NavButton icon="arrow-back" />
      <div className={styles.group}>
        <NavButton icon="heart" />
        <NavButton icon="share" />
        <NavButton icon="search" />
      </div>
    </nav>
  );
}
