import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { usePlaceOrder } from './usePlaceOrder';
import { usePrepareOrder } from '../../Hooks/usePrepareOrder';

import HeaderBase from '../../UI/HeaderBase/HeaderBase';
import CtaBase from '../../UI/CtaBase/CtaBase';

import DeliveryAddress from './DeliveryAddress/DeliveryAddress';
import DeliveryOptions from './DeliveryOptions/DeliveryOptions';
import RiderTip from './RiderTip/RiderTip';
import OrderSummary from './OrderSummary/OrderSummary';

export default function PaymentPage() {
  const navigate = useNavigate();

  const { placeOrder, isPlacing } = usePlaceOrder();
  const currentOrder = usePrepareOrder();
  console.log(currentOrder);

  function handleClick() {
    placeOrder(currentOrder);
    //reset STOREEE !!! here or in placeOrder
    navigate('/');
  }

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div style={{ backgroundColor: '#F7F7F7', minHeight: '100vh' }}>
      <HeaderBase heading="Checkout" className="colorGrey" />
      <DeliveryAddress />
      <DeliveryOptions />
      {/* <PaymentMethod /> */}
      <RiderTip />
      <OrderSummary />

      <CtaBase btnText="Place order" onClick={handleClick} disabled={isPlacing} />
    </div>
  );
}
