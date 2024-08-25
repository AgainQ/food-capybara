import { Navigate, Outlet } from 'react-router-dom';
import { useCartStore } from '../Stores/CartStore';

export default function ProtectedRoute() {
  const { itemsInCart } = useCartStore();

  // Redirect to the home page if the cart is empty
  if (itemsInCart.length === 0) {
    return <Navigate to="/" />;
  }

  // Otherwise, render the child route
  return <Outlet />;
}
