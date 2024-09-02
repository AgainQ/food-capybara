import { useWebApp } from '@vkruglikov/react-telegram-web-app';

import Button from './Button';
import styles from './Summary.module.css';

// from api
const summaryData = {
  distance: 0.2,
  deliveryPrice: 11,
  minOrder: 50,
};

export default function Summary() {
  const { distance, deliveryPrice: delPrice, minOrder } = summaryData;

  const WebApp = useWebApp();
  WebApp.ready();
  console.log(WebApp);

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
