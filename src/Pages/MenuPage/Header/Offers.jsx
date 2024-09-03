import { useGetRestaurantInfo } from '../../../Hooks/useGetRestaurantInfo';
import styles from './Offers.module.css';

export default function Offers({ restaurantInfo }) {
  const { offers = [] } = restaurantInfo;

  return (
    <div className={styles.offers}>
      {offers.map((offer) => (
        <Offer
          key={offer.id}
          title={offer.name}
          text={offer.description}
          color={offer.color}
          icon={offer.icon}
        />
      ))}
    </div>
  );
}

function Offer({ title, text, color, icon }) {
  return (
    <figure className={styles.offerBox} style={{ backgroundColor: color }}>
      <h3 className={styles.title}>
        <ion-icon name={`${icon}-outline`}></ion-icon>
        <span>{title}</span>
      </h3>
      <p className={styles.text}>{text}</p>
    </figure>
  );
}
