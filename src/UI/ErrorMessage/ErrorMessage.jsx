import styles from './ErrorMessage.module.css';

export default function ErrorMessage({ error }) {
  return <p className={styles.error}>{error}</p>;
}
