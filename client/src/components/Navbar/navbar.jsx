import { Link, useMatch, useResolvedPath } from 'react-router-dom'

import logo from '../../images/logo.png';
import './navbar.css'

export default function Navbar() {
    const toggleMenu = () => {
        const sidepanel = document.querySelector('.sidepanel');
        sidepanel.classList.toggle('show');
    }

    const bodyBlur = () => {
            const body = document.querySelector('.container');
            body.classList.toggle('blur');
    }
      
    return (
        <nav className="nav">
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/store">Store</CustomLink>
                <CustomLink to="/cart">Cart</CustomLink>
                <li class="menu-btn"><a href="#" onClick={() => {toggleMenu();bodyBlur();}}>=</a>
                <div class="sidepanel"><ul class="dropdown-menu">
                    <li>
                        <a href="#" onClick={() => {toggleMenu();bodyBlur();}}>X</a>
                    </li>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/store">Store</CustomLink>
                    <CustomLink to="/cart">Cart</CustomLink>
                    <CustomLink to="/shipping">Shipping</CustomLink>
                    <CustomLink to="/account">Account</CustomLink>
                    <CustomLink to="/contact">Contact</CustomLink>
                </ul>
            </div>
        </li>
    </ul>
    </nav>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>{children}</Link>
            </li>
        )
}