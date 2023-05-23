import './App.css';
import Navbar from './components/Navbar/navbar';
import Home from './pages/HomePage/home';
import Store from './pages/StorePage/store';
import Cart from './pages/CartPage/cart';
import Shipping from './pages/ShippingPage/shipping';
import Account from './pages/AccountPage/account';
import About from './pages/AboutPage/about';

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/store":
      Component = Store;
      break;
    case "/cart":
      Component = Cart;
      break;
    case "/shipping":
      Component = Shipping;
      break;
    case "/account":
      Component = Account;
      break;
    case "/about":
      Component = About;
    break;
  }
  return (
    <>
      <Navbar />
      <Component />
    </>
    
  );
}

export default App;
