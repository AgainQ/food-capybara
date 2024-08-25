import { useEffect } from 'react';
import { useMenuStore } from '../../Stores/MenuStore';

import Navigation from './Navigation/_Navigation';
import Header from './Header/_Header';
import Menu from './Menu/_Menu';
import Loading from '../../UI/Loading/Loading';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import ViewCart from './ViewCart/ViewCart';

export default function MenuPage() {
  const { isLoading, error, fetchMeals } = useMenuStore();

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  return (
    <>
      <Navigation />
      <Header />

      {isLoading && <Loading />}
      {error && <ErrorMessage error={error} />}
      {!isLoading && !error && <Menu />}

      <ViewCart />
    </>
  );
}
