import React from 'react';
import './home.css';
import logo from '../../images/logo.png';
  
const Home = () => {

  return (
    <div className='Home-Page'>
        <ul className='Shoe-Data'>
          <li className='Shoe-Name'>ShoeName</li>
          <li>ShoeBrand</li>
          <li>ShoeSize</li>
          <li>GenderType</li>
          <li>Colors</li>
        </ul>
        <img className='Shoe-Image' src={logo}/>
    </div>
  );
};
  
export default Home;