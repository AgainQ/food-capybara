// import { useEffect, useState } from 'react';
// import WebApp from '@twa-dev/sdk';
import Button from './Button';
import styles from './Summary.module.css';

export default function Summary({ restaurantInfo }) {
  const { minOrder = '' } = restaurantInfo;

  // const [userData, setUserData] = useState(null);

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
        <span>{`0.2 km away |`}</span>
        <span>{`฿ 11.00 delivery |`}</span>
        <span>{`฿ ${minOrder}.00 Minimum`}</span>
      </div>
      {/* {userData && (
        <div>
          <span>ID: {userData.id}</span>
          <span>First Name: {userData.first_name}</span>
          <span>Last Name: {userData.last_name}</span>
          <span>Username: {userData.username}</span>
        </div>
      )} */}
      <Button text="More info" />
    </div>
  );
}
