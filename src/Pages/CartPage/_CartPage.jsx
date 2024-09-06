import { useCartStore } from '../../Stores/CartStore';
import { useNavigate } from 'react-router';

import HeaderBase from '../../UI/HeaderBase/HeaderBase';
import Delivery from './Delivery/Delivery';
import CartItems from './CartItems/_CartItems';
import Recommendations from './Recommendations/Recommendations';
import PriceDetails from './PriceDetails/PriceDetails';
import CtaBase from '../../UI/CtaBase/CtaBase';
import { useEffect } from 'react';
// import ReviewPayment from './ReviewPayment/ReviewPayment';

export default function CartPage() {
  const navigate = useNavigate();
  const { itemsInCart } = useCartStore();

  function handleClick() {
    navigate('../payment');
  }

  useEffect(() => window.scrollTo(0, 0), []);

  if (itemsInCart.length > 0)
    return (
      <div
        style={{
          minHeight: '100vh',
          // position: 'relative',
          paddingBottom: '11rem',
          backgroundColor: '#fff',
        }}
      >
        <HeaderBase heading="Корзина" text="Sushi Village" />
        <Delivery />
        <CartItems />
        <Recommendations />
        <PriceDetails />
        <CtaBase btnText="Перейти к оплате" onClick={handleClick} />

        {/* <ReviewPayment /> */}
      </div>
    );
}

// Price Details
// BtnGoToPayment
