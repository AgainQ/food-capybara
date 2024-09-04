import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import MenuPage from './Pages/MenuPage/MenuPage';
import MealPage from './Pages/MealPage/MealPage';
import CartPage from './Pages/CartPage/_CartPage';
import PaymentPage from './Pages/PaymentPage/PaymentPage';

import ProtectedRoute from './Pages/ProtectedRoute';
import OrdersPage from './Pages/OrdersPage/OrdersPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="ReactQueryDevtools">
        <ReactQueryDevtools initialIsOpen={false} />
      </div>

      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route index element={<MenuPage />} />
            <Route path="meal" element={<MealPage />} />
            <Route path="orders" element={<OrdersPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="cart" element={<CartPage />} />
              <Route path="payment" element={<PaymentPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
