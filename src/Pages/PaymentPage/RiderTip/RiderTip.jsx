import { useDeliveryStore } from '../../../Stores/DeliveryStore';
import HeadingTertiary from '../../../UI/HeadingTertiary/HeadingTertiary';
import { formatPrice } from '../../../Utils/utils';
import styles from './RiderTip.module.css';
export default function RiderTip() {
  return (
    <div className={styles.box}>
      <TextBox />
      <Tips />
    </div>
  );
}

function TextBox() {
  return (
    <div className={styles.textBox}>
      <ion-icon name="wallet-outline"></ion-icon>

      <div>
        <HeadingTertiary>Чаевые курьеру</HeadingTertiary>
        <p className={styles.text}>
          100% чаевых идут курьеру. Мы ничего не забираем из этих денег
        </p>
      </div>
    </div>
  );
}

function Tips() {
  const { riderTipOptions } = useDeliveryStore();

  return (
    <div className={styles.tips}>
      {riderTipOptions.map((tip) => (
        <Tip tip={tip} key={tip.id} />
      ))}
    </div>
  );
}

function Tip({ tip }) {
  const { riderTip, setRiderTip } = useDeliveryStore();
  const isSelected = tip.id === riderTip.id;

  function handleClick() {
    if (!isSelected) {
      setRiderTip(tip);
    }
  }

  return (
    <button
      className={`${styles.tip} ${isSelected && styles.selected}`}
      onClick={handleClick}
    >
      {tip.value === 0 ? 'Не сейчас' : formatPrice(tip.value)}
    </button>
  );
}
