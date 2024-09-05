import styles from './ReorderButton.module.css';
import { useReorderStore } from '../../../Stores/ReorderStore';
import { useNavigate } from 'react-router-dom';

export default function ReorderButton({ order }) {
  const { id, items } = order;

  const setOrderId = useReorderStore((state) => state.setOrderId);
  const setSelectedIDs = useReorderStore((state) => state.setSelectedIDs);

  const navigate = useNavigate();

  function handleClick(e) {
    e.stopPropagation();
    navigate('/');
    setOrderId(id);
    setSelectedIDs(items.map((item) => item.id));
  }

  return (
    <button className={styles.reorderBtn} onClick={handleClick}>
      Заказать снова
    </button>
  );
}
