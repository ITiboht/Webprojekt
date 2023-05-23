import logo from '../../images/logo.png';
import './navbar.css'

export default function Navbar() {
    const toggleMenu = () => {
        const sidepanel = document.querySelector('.sidepanel');
        sidepanel.classList.toggle('show');
      }
    return (
        <nav className="nav">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/store">Shop</a></li>
                <li><a href="/cart">Cart</a></li>
                <li class="menu-btn"><a href="#" onClick={toggleMenu}>=</a>
                <div class="sidepanel"><ul class="dropdown-menu">
                    <li><a href="#" onClick={toggleMenu}>X</a></li>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/cart">Cart</a></li>
                    <li><a href="/shipping">Shipping</a></li>
                    <li><a href="/account">Account</a></li>
                    <li><a href="/about">About us</a></li>
                </ul>
            </div>
        </li>
    </ul>
    </nav>
    )
}
