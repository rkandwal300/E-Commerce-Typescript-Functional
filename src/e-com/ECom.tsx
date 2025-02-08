import { Route, Routes } from 'react-router-dom';
import Footer from '../components/shared/Footer/Footer';
import Header from '../components/shared/Header/Header';
import PDListPage from './/PD/PDListPage';
import About from './About-Contact/About';
import Contact from './About-Contact/Contact';
import Auth from './Authentication/Auth';
import Cart from './Cart/Cart';
import AlertState from './Context/AlertContext';
import { CartState } from './Context/CartContext';
import { UserState } from './Context/UserContext';
import Error from './Error_&_Loading/Error';
import Home from './PD/Home';
import ProductDetail from './ProdDetail/ProductDetail';

const ECom = () => {
  return (
    <UserState>
      <CartState>
        <AlertState>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<PDListPage />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/carts" element={<Cart />} />
            <Route path="/About" element={<About />} />
            <Route path="/my-account" element={<Auth />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </AlertState>
      </CartState>
    </UserState>
  );
};

export default ECom;
