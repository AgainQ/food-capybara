import styles from './Summary.module.css';
import Button from './Button';

// from api

const summaryData = {
  distance: 0.2,
  deliveryPrice: 11,
  minOrder: 50,
};

export default function Summary() {
  const { distance, deliveryPrice: delPrice, minOrder } = summaryData;

  return (
    <div className={styles.summary}>
      <div>
        <span>{`${distance}km away |`}</span>
        <span>{`฿ ${delPrice}.00 delivery |`}</span>
        <span>{`฿ ${minOrder}.00 Minimum`}</span>
      </div>
      <Button text="More info" />
    </div>
  );
}
