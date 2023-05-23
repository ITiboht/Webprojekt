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
                <CustomLink href="/">Home</CustomLink>
                <CustomLink href="/store">Store</CustomLink>
                <CustomLink href="/cart">Cart</CustomLink>
                <li class="menu-btn"><a href="#" onClick={toggleMenu}>=</a>
                <div class="sidepanel"><ul class="dropdown-menu">
                    <li>
                        <a href="#" onClick={toggleMenu}>X</a>
                    </li>
                    <CustomLink href="/">Home</CustomLink>
                    <CustomLink href="/store">Store</CustomLink>
                    <CustomLink href="/cart">Cart</CustomLink>
                    <CustomLink href="/shipping">Shipping</CustomLink>
                    <CustomLink href="/account">Account</CustomLink>
                    <CustomLink href="/contact">Contact</CustomLink>
                </ul>
            </div>
        </li>
    </ul>
    </nav>
    )
}

function CustomLink({href, children, ...props}) {
    const path = window.location.pathname;
    return (
            <li className={path == href ? "active" : ""}>
                <a href={href} {...props}>{children}</a>
            </li>
        )
}