import styles from './HeadingTertiary.module.css';

export default function HeadingTertiary({ children }) {
  return <h3 className={styles.heading}>{children}</h3>;
}
