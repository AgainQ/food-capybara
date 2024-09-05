import styles from './_BoughtTogether.module.css';
import HeadingTertiary from '../../../UI/HeadingTertiary/HeadingTertiary';
import Tag from '../Tag/Tag';
import Meals from './Meals';

import { useGetMenu } from '../../../Hooks/useGetMenu';
import { generateRandomMeals } from '../../../Utils/generateRandomMeals';
import { useMemo } from 'react';

export default function BoughtTogether() {
  const { menu } = useGetMenu();
  const recommendedMeals = useMemo(() => generateRandomMeals(menu), [menu]);

  return (
    <div className={styles.box}>
      <div className={styles.boughtTogether}>
        <header className={styles.header}>
          <div>
            <HeadingTertiary>Часто покупают вместе</HeadingTertiary>
            <p className={styles.text}>Другие покупатели также заказывали</p>
          </div>

          <Tag />
        </header>

        <Meals recommendedMeals={recommendedMeals} />
      </div>
    </div>
  );
}
