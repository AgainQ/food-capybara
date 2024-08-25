import { useState } from 'react';
import { useMealStore } from '../../../Stores/MealStore';

import HeadingTertiary from '../../../UI/HeadingTertiary/HeadingTertiary';
import ButtonViewMore from '../ButtonViewMore/ButtonViewMore';
import Tag from '../Tag/Tag';

import styles from './Toppings.module.css';

export default function Toppings() {
  const activeMeal = useMealStore((state) => state.activeMeal);
  const {
    toppings: { items: toppings, areRequired, max },
  } = activeMeal;

  return (
    <div className={styles.box}>
      <div className={styles.topingsBox}>
        <header className={styles.header}>
          <div>
            <HeadingTertiary>Topings choices</HeadingTertiary>
            <p className={styles.select}>{`Select at least 1, maximum ${max}`}</p>
          </div>
          <Tag isRequired={areRequired} />
        </header>

        <ToppingsList toppings={toppings} max={max} />
      </div>
    </div>
  );
}

function ToppingsList({ toppings, max }) {
  const [isOpen, setIsOpen] = useState(false);
  const toppingsAmount = toppings.length;

  return (
    <>
      <ul className={styles.toppingsList}>
        {toppings
          .slice(0, isOpen || toppingsAmount <= 5 ? toppingsAmount : 5)
          .map((topping) => (
            <ToppingItem topping={topping} max={max} key={topping.id} />
          ))}
      </ul>

      {toppingsAmount > 5 && (
        <ButtonViewMore
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          toppingsAmount={toppingsAmount}
          className="mt-md"
        />
      )}
    </>
  );
}

function ToppingItem({ topping, max }) {
  const { name, price, id } = topping;
  const { selectedToppings, addTopping, deleteTopping } = useMealStore();

  const isMaxSelected = selectedToppings.length >= max;
  const isSelected = selectedToppings.some((t) => t.id === topping.id);

  function handleCheck(e) {
    if (e.target.checked) {
      addTopping(topping);
    }

    if (!e.target.checked) {
      deleteTopping(topping);
    }
  }

  return (
    <li>
      <label htmlFor={id} className={styles.topping}>
        <div className={styles.toppingNameBox}>
          <input
            id={id}
            type="checkbox"
            onChange={handleCheck}
            disabled={!isSelected && isMaxSelected}
          />
          <p>{name}</p>
        </div>
        <p className={styles.toppingPrice}>{`+฿ ${price} `}</p>
      </label>
    </li>
  );
}
