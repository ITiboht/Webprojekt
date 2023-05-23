import React from 'react';
import './home.css';
  
const Home = () => {

  const toggleMenu = () => {
    const sidepanel = document.querySelector('.sidepanel');
    sidepanel.classList.toggle('show');
  }

  return (
    <div>
      <nav>
            <ul>
                <li><a href="#">New</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Cart</a></li>
                <li class="menu-btn"><a href="#" onClick={toggleMenu}>=</a>
                <div class="sidepanel"><ul class="dropdown-menu">
                    <li><a href="#" onClick={toggleMenu}>X</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Cart</a></li>
                    <li><a href="#">Shipping</a></li>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">About us</a></li>
                </ul>
            </div>
        </li>
    </ul>
    </nav>
    <div class="container">
        <div class="text">
            <h1>ShoeName</h1>
            <ul>
                <li>márka</li>
                <li>méret</li>
                <li>nem</li>
                <li>ár</li>
            </ul>
        </div>
        <div class="content">
            
        </div>
    </div>
    </div>
  );
};
  
export default Home;