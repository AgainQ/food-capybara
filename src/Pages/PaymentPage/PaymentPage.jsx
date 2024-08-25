import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useOrdersStore } from '../../Stores/OrdersStore';
import { usePrepareOrder } from '../../Hooks/usePrepareOrder';

import HeaderBase from '../../UI/HeaderBase/HeaderBase';
import CtaBase from '../../UI/CtaBase/CtaBase';

import DeliveryAddress from './DeliveryAddress/DeliveryAddress';
import DeliveryOptions from './DeliveryOptions/DeliveryOptions';
import RiderTip from './RiderTip/RiderTip';
import OrderSummary from './OrderSummary/OrderSummary';

export default function PaymentPage() {
  const navigate = useNavigate();
  const placeOrder = useOrdersStore((state) => state.placeOrder);

  const currentOrder = usePrepareOrder();

  function handleClick() {
    placeOrder(currentOrder);
    navigate('/');
  }

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div style={{ backgroundColor: '#F7F7F7' }}>
      <HeaderBase heading="Checkout" className="colorGrey" />
      <DeliveryAddress />
      <DeliveryOptions />
      {/* <PaymentMethod /> */}
      <RiderTip />
      <OrderSummary />

      <CtaBase btnText="Place order" onClick={handleClick} />
    </div>
  );
}
