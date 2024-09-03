import Navigation from './Navigation/_Navigation';
import Header from './Header/_Header';
import Menu from './Menu/_Menu';
import ViewCart from './ViewCart/ViewCart';

export default function MenuPage() {
  return (
    <>
      <Navigation />
      <Header />
      <Menu />

      <ViewCart />
    </>
  );
}
