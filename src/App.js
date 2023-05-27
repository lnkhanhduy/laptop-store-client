import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Product from './pages/Product/Product';
import WarrantyCheck from './pages/WarrantyCheck/WarrantyCheck';
import Contact from './pages/Contact/Contact';
import Auth from './pages/Auth/Auth';
import Cart from './pages/Cart/Cart';
import BuyProduct from './pages/BuyProduct/BuyProduct';
import MyOrder from './pages/MyOrder/MyOrder';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/list-product/:list" element={<Product />} />
        <Route path="/warranty-check" element={<WarrantyCheck />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/fill-info/:id" element={<BuyProduct />} />
        <Route path="/my-order" element={<MyOrder />} />
        <Route path="/search/:keyword" element={<Product />} />
        <Route path="/:action" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
