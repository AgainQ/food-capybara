import SpecialInstructions from './SpecialInstructions';
import NotAvailable from './NotAvailable';
import styles from './_ExtraInfo.module.css';

export default function ExtraInfo() {
  return (
    <div className={styles.extraInfo}>
      <SpecialInstructions />
      <NotAvailable />
    </div>
  );
}
