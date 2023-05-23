import React from 'react';
import './home.css';
  
const Home = () => {

  const toggleMenu = () => {
    const sidepanel = document.querySelector('.sidepanel');
    sidepanel.classList.toggle('show');
  }

  return (
    <div>
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