import './App.css'
import axios from 'axios'
import { Routes,Route } from 'react-router'
import { useEffect, useState } from 'react';
import { HomePage } from './pages/HomePage'
import { CheckOut } from './pages/CheckOut'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'

function App() {
  const [cart, setcart] = useState([])

  useEffect(() => {
    const fetchCart = async () => {
      const response = await axios.get('/api/cart-items?expand=product');
      setcart(response.data);
    };
  
    fetchCart();
  }, []);


  return (
    <Routes>
      <Route index = "/" element={<HomePage cart={cart} />} />
      <Route path = "/checkout" element={<CheckOut cart={cart} />} />
      <Route path = "/orders" element={<OrdersPage cart={cart} />} />
      <Route path = "/tracking" element={<TrackingPage />} />
    </Routes>
    
  )
}
export default App
