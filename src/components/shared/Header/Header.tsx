import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ResponsiveNavbar from './ResponsiveNavbar';

export interface Route {
  id: string;
  label: string;
  path: string;
}

const subRoutes: Route[] = [
  {
    id: '11',
    label: 'MY ACCOUNT',
    path: '/login',
  },
  {
    id: '12',
    label: 'CART',
    path: '/cart',
  },
];
const routes: Route[] = [
  { id: '1', label: 'Home', path: '/' },
  { id: '2', label: 'Products', path: '/products' },
  { id: '3', label: 'Mugs', path: '/mugs' },
  { id: '4', label: 'About', path: '/about' },
  { id: '5', label: 'Contact', path: '/contact' },
];
const Header = () => {
  return (
    <div className="flex gap-4 justify-between items-center px-10 py-4 ">
      <Link to="/">
        <img src="logo.png" width="80" height="20" alt="logo" />
      </Link>
      <Navbar routes={routes} subRoutes={subRoutes} />
      <ResponsiveNavbar routes={routes} subRoutes={subRoutes} />
    </div>
  );
};

export default Header;
