import { useDeliveryStore } from '../../../Stores/DeliveryStore';
import HeadingTertiary from '../../../UI/HeadingTertiary/HeadingTertiary';
import styles from './DeliveryAddress.module.css';

export default function DeliveryAddress() {
  return (
    <div className={styles.box}>
      <HeadingTertiary>Delivery address</HeadingTertiary>

      <figure className={styles.figure}>
        <div className={styles.wrapper}>
          <AddressBox />
          <Instructions />
        </div>

        <LeaveAt />
      </figure>
    </div>
  );
}

function AddressBox() {
  const {
    deliveryAddress: { street, city, floor },
  } = useDeliveryStore();

  return (
    <div className={styles.addressBox}>
      <ion-icon name="map-outline"></ion-icon>

      <div className={styles.addressDetails}>
        <p className={styles.addressType}>Home</p>
        <p>{street}</p>
        <p>{city}</p>
        <p>{floor}</p>
      </div>

      <ion-icon name="chevron-forward-outline"></ion-icon>
    </div>
  );
}

function Instructions() {
  const { deliveryInstructions, setInstructions } = useDeliveryStore();

  function handleInstructionsChange(e) {
    setInstructions(e.target.value);
  }

  return (
    <div className={styles.instructions}>
      <label htmlFor="instructions">Delivery instuctions</label>
      <input
        id="instructions"
        placeholder="Your request..."
        value={deliveryInstructions}
        onChange={handleInstructionsChange}
      />
    </div>
  );
}

function LeaveAt() {
  const { leaveAtTheDoor, toggleLeaveAtTheDoor } = useDeliveryStore();

  function handleToggleCheckbox() {
    toggleLeaveAtTheDoor();
  }

  return (
    <label htmlFor="leaveAt" className={styles.leaveAtBox}>
      <ion-icon name="home-outline"></ion-icon>
      <p>Leave at the door</p>
      <input
        id="leaveAt"
        type="checkbox"
        className={styles.checkbox}
        value={leaveAtTheDoor}
        onChange={handleToggleCheckbox}
      />
    </label>
  );
}
