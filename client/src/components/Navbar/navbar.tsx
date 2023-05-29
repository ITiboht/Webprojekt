import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

import logo from '../../images/logo.png';
import './navbar.css';

interface CustomLinkProps {
    to: string;
    children: React.ReactNode;
}

function CustomLink({ to, children, ...props }: CustomLinkProps): JSX.Element {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>{children}</Link>
      </li>
    );
  }

export default function Navbar() {

        const toggleMenu = () => {
            const sidepanel = document.querySelector('.sidepanel');
            sidepanel?.classList.toggle('show');
        }

    

    const bodyBlur = () => {
            const body = document.querySelector('.container');
            body?.classList.toggle('blur');  
    }

    const clickHandler = () => {
        bodyBlur();
        toggleMenu();
    }
      
    return (
        <nav className="nav">
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/store">Store</CustomLink>
                <CustomLink to="/cart">Cart</CustomLink>
                <li className="menu-btn"><a onClick={clickHandler}>=</a>
                <div className="sidepanel"><ul className="dropdown-menu">
                    <li>
                        <a onClick={clickHandler}>X</a>
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

/*
function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>{children}</Link>
            </li>
        )
}
*/