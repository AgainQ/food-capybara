import styles from './ButtonViewMore.module.css';

export default function ButtonViewMore({
  isOpen,
  setIsOpen,
  toppingsAmount,
  className = '',
}) {
  function handleClick() {
    setIsOpen(isOpen => !isOpen);
  }

  return (
    <button onClick={handleClick} className={`${styles.btn} ${className}`}>
      <ion-icon name="chevron-down-outline"></ion-icon>
      <span>{isOpen ? `View less` : `View ${toppingsAmount - 5 || ''} more`}</span>
    </button>
  );
}
