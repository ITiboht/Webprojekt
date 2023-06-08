import React from 'react';
import './home.css';
import HomeData from '../../components/HomeData.tsx';
  
const Home = () => {

  /*
  <div className='Home-Page'>
      <div className='Home-Box'>
        <ul className='Shoe-Data'>
          <li className='Shoe-Name'>ShoeName</li>
          <li>ShoeBrand</li>
          <li>ShoeSize</li>
          <li>GenderType</li>
          <li>Colors</li>
        </ul>
        <button className='Add-Shoe'>Add to cart</button>
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
    */

  return (
    <HomeData/>
  );
};
  
export default Home;