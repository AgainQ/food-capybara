import { useState } from 'react';

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
  const [userr, setUserr] = useState({});

  // Initialize the Telegram WebApp SDK
  if (window.Telegram && window.Telegram.WebApp) {
    window.Telegram.WebApp.ready();

    // Access the user's data
    const user = window.Telegram.WebApp.initDataUnsafe.user;

    if (user) {
      setUserr(user);
      console.log(`User ID: ${user.id}`);
      console.log(`User Name: ${user.first_name} ${user.last_name}`);
      console.log(`Username: ${user.username}`);
    } else {
      console.log('No user data available');
    }
  } else {
    console.error('Telegram WebApp is not available.');
  }

  return (
    <div className={styles.summary}>
      <div>
        <span>{`${userr?.username && 'no username'}`}</span>
        <span>{`${distance}km away |`}</span>
        <span>{`฿ ${delPrice}.00 delivery |`}</span>
        <span>{`฿ ${minOrder}.00 Minimum`}</span>
      </div>
      <Button text="More info" />
    </div>
  );
}
