import styles from './ButtonPrimary.module.css';

export default function ButtonPrimary({ children, className, onClick }) {
  return (
    <button className={`${styles.btn} ${styles[className]}`} onClick={onClick}>
      {children}
    </button>
  );
}
