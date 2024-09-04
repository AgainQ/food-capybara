import HeaderBase from '../../UI/HeaderBase/HeaderBase';
import OrdersPreview from './OrdersPreview/OrdersPreview';

export default function OrdersPage() {
  return (
    <div>
      <HeaderBase heading="Orders" />
      <OrdersPreview />
    </div>
  );
}
