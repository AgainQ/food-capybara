import styles from './NavButton.module.css';

export default function NavButton({ icon }) {
  return (
    <button className={styles.btn}>
      <ion-icon name={`${icon}-outline`}></ion-icon>
    </button>
  );
}
