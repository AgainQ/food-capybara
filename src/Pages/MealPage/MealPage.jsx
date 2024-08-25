import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMealStore } from '../../Stores/MealStore';

import ButtonBack from './ButtonBack/ButtonBack';
import Details from './Details/Details';
import Toppings from './Toppings/Toppings';
import BoughtTogether from './BoughtTogether/_BoughtTogether';
import ExtraInfo from './ExtraInfo/_ExtraInfo';
import AddToCart from './AddToCart/AddToCart';

export default function MealPage() {
  const navigate = useNavigate();
  const activeMeal = useMealStore((state) => state.activeMeal);

  useEffect(() => {
    if (!activeMeal) {
      navigate('/');
    }
  }, [activeMeal, navigate]);

  useEffect(() => window.scrollTo(0, 0), []);

  if (activeMeal)
    return (
      <div style={{ position: 'relative' }}>
        <ButtonBack />
        <Details />
        <Toppings />
        <BoughtTogether />
        <ExtraInfo />
        <AddToCart />
      </div>
    );
}
