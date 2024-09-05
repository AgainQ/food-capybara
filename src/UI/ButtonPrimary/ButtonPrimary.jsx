import styles from './ButtonPrimary.module.css';

export default function ButtonPrimary({ children, className, onClick }) {
  return (
    <button
      className={`${styles[className]}`}
      // className={clsx(
      //   styles.btn,
      //   className && className.split(' ').map((c) => styles[c])
      // )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
