import styles from './Tag.module.css';

export default function Tag({ isRequired = false }) {
  return (
    <p
      className={
        isRequired
          ? `${styles.tag} ${styles.required}`
          : `${styles.tag} ${styles.optional}`
      }
    >
      {isRequired ? 'Required' : 'Optional'}
    </p>
  );
}
