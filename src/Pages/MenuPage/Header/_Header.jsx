import { useGetRestaurantInfo } from '../../../Hooks/useGetRestaurantInfo';

import Summary from './Summary';
import Details from './Details';
import Offers from './Offers';
import Spinner from '../../../UI/Spinner/Spinner';

import styles from './_Header.module.css';

export default function Header() {
  const { data: restaurantInfo = {}, isPending } = useGetRestaurantInfo();
  const { name = '' } = restaurantInfo;

  if (isPending) return <Spinner />;

  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>{isPending ? 'Loading...' : name}</h1>

      <Summary restaurantInfo={restaurantInfo} />
      <Details restaurantInfo={restaurantInfo} />
      <Offers restaurantInfo={restaurantInfo} />
    </header>
  );
}
