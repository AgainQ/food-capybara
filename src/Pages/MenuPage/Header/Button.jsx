import styles from './Button.module.css';

export default function Button({ text }) {
  return (
    <a className={styles.btn} href="https://placeholder.org/">
      {text}
    </a>
  );
}
