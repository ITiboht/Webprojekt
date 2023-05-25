import React from 'react';
import './home.css';
import logo from '../../images/logo.png';
  
const Home = () => {

  return (
    <div className='Home-Page'>
      <div className='Home-Box'>
        <ul className='Shoe-Data'>
          <li className='Shoe-Name'>ShoeName</li>
          <li>ShoeBrand</li>
          <li>ShoeSize</li>
          <li>GenderType</li>
          <li>Colors</li>
        </ul>
        <div className='To-Cart'>
          <h1>Add to cart</h1>
        </div>
        <img className='Shoe-Image' src={logo} alt='Hello'/>
        <div className='Slider'>
        <span className='Left-Arrow'>←</span>
        <span className='currID'>x</span>
        <span>/</span>
        <span className='maxID'>y</span>
        <span className='Right-Arrow'>→</span>
      </div>
      </div>
    </div>
  );
};
  
export default Home;