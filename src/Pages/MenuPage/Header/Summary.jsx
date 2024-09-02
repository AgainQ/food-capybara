import { useEffect, useState } from 'react';
import Button from './Button';
import styles from './Summary.module.css';
import WebApp from '@twa-dev/sdk';

// from api
const summaryData = {
  distance: 0.2,
  deliveryPrice: 11,
  minOrder: 50,
};

export default function Summary() {
  const { distance, deliveryPrice: delPrice, minOrder } = summaryData;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log(WebApp);
    const tgUser = WebApp.initDataUnsafe.user;
    console.log(tgUser);
    if (tgUser) {
      setUserData(tgUser);
    }
  }, []);

  return (
    <div className={styles.summary}>
      <div>
        <span>{`${distance}km away |`}</span>
        <span>{`฿ ${delPrice}.00 delivery |`}</span>
        <span>{`฿ ${minOrder}.00 Minimum`}</span>
      </div>
      {userData && (
        <div>
          <span>ID: {userData.id}</span>
          <span>First Name: {userData.first_name}</span>
          <span>Last Name: {userData.last_name}</span>
          <span>Username: {userData.username}</span>
        </div>
      )}
      <Button text="More info" />
    </div>
  );
}
