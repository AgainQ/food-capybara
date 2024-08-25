import styles from './Offers.module.css';

const offersData = [
  {
    id: 24,
    title: 'Free Delivery',
    text: 'minimum ฿ 149. Valid for all items. Auto applied.',
    color: '#FDF3FE',
    icon: 'diamond',
  },
  {
    id: 37,
    title: 'Stamp Cards',
    text: 'Earn up to 200 points and more',
    color: '#FFEDC5',
    icon: 'apps',
  },
];

export default function Offers() {
  return (
    <div className={styles.offers}>
      {offersData.map(offer => (
        <Offer
          key={offer.id}
          title={offer.title}
          text={offer.text}
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
