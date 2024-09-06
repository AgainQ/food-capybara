// import { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';
import { formatPrice } from '../../../Utils/utils';
import Button from './Button';
import styles from './Summary.module.css';

export default function Summary({ restaurantInfo }) {
  const { minOrder = '' } = restaurantInfo;

  // const [userData, setUserData] = useState(null);
  WebApp.disableVerticalSwipes();
  // useEffect(() => {
  //   console.log(WebApp);
  //   const tgUser = WebApp.initDataUnsafe.user;
  //   console.log(tgUser);
  //   if (tgUser) {
  //     setUserData(tgUser);
  //   }
  // }, []);

  return (
    <div className={styles.summary}>
      <div>
        <span>{`0.2 км от вас |`}</span>
        <span>{`${formatPrice(10)} доставка |`}</span>
        <span>{`${formatPrice(minOrder)} мин. заказ`}</span>
      </div>
      {/* {userData && (
        <div>
          <span>ID: {userData.id}</span>
          <span>First Name: {userData.first_name}</span>
          <span>Last Name: {userData.last_name}</span>
          <span>Username: {userData.username}</span>
        </div>
      )} */}
      <Button text="Подробнее" />
    </div>
  );
}
