import React from 'react'
import './store.css';
import logo from '../../images/logo.png';

const Store = () => {

  const toggleBrand = () => {
    const brand = document.querySelector('.Brand');
    brand?.classList.toggle('show');
    }
    
  const toggleSize = () => {
    const brand = document.querySelector('.Size');
    brand?.classList.toggle('show');
    }

  const toggleGender = () => {
    const brand = document.querySelector('.Gender');
    brand?.classList.toggle('show');
    }

  const toggleColor = () => {
    const brand = document.querySelector('.Color');
    brand?.classList.toggle('show');
    }

  return (
    <div className='Store-Page'>
      <h1 className='Header'>Explore the possibilities</h1>
      <a>Great deals for great shoes!</a>
      <div className='Store-Filter'>
        <div onClick={toggleBrand}>
          <span>Brand</span>
          <ul className='Brand'>
            <li>
              <label className='container'>Nike
                <input type='checkbox' />
                <span className='customCheck'></span>
              </label>
            </li>
          </ul>
        </div>
        <div onClick={toggleSize}>
          <span>Size</span>
          <ul className='Size'>
            <li>
              <input type='checkbox' id='size-1' name='size-1' />
              <label htmlFor='size-1'>Size 1</label>
            </li>
          </ul>
        </div>
        <div onClick={toggleGender}>
          <span>Gender</span>
          <ul className='Gender'>
            <li>
              <input type='checkbox' id='gender-1' name='gender-1' />
              <label htmlFor='gender-1'>Gender 1</label>
            </li>
          </ul>
        </div>
        <div onClick={toggleColor}>
          <span>Color</span>
          <ul className='Color'>
            <li>
              <input type='checkbox' id='color-1' name='color-1' />
              <label htmlFor='color-1'>Color 1</label>
            </li>
          </ul>
        </div>  
      </div>
      <div className='Store-Grid'>
          
        </div>
    </div>
    
  );
}

export default Store;