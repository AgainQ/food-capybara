import styles from './_BoughtTogether.module.css';
import HeadingTertiary from '../../../UI/HeadingTertiary/HeadingTertiary';
import Tag from '../Tag/Tag';
import Meals from './Meals';

export default function BoughtTogether() {
  return (
    <div className={styles.box}>
      <div className={styles.boughtTogether}>
        <header className={styles.header}>
          <div>
            <HeadingTertiary>Frequently bought together</HeadingTertiary>
            <p className={styles.text}>Other customers also ordered these</p>
          </div>

          <Tag />
        </header>

        <Meals />
      </div>
    </div>
  );
}
