import styles from './_Header.module.css';
import Summary from './Summary';
import Details from './Details';
import Offers from './Offers';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>The Green House Cafe</h1>

      <Summary />
      <Details />
      <Offers />
    </header>
  );
}
