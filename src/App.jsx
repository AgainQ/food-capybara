import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MenuPage from './Pages/MenuPage/MenuPage';
import MealPage from './Pages/MealPage/MealPage';
import CartPage from './Pages/CartPage/_CartPage';
import PaymentPage from './Pages/PaymentPage/PaymentPage';

import ProtectedRoute from './Pages/ProtectedRoute';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route index element={<MenuPage />} />
          <Route path="meal" element={<MealPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path="cart" element={<CartPage />} />
            <Route path="payment" element={<PaymentPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
