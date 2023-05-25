import React from 'react'
import './store.css';
import logo from '../../images/logo.png';

const Store = () => {
  return (
    <div className='Store-Page'>
      <h1 className='Header'>Explore the possibilities</h1>
      <a>Great deals for great shoes!</a>
      <div className='Store-Filter'>
        <nav>
          <ul>
            <li>
              <a className='Brand'>Brand</a>
            </li>
            <li>
              <a className='Size'>Size</a>
            </li>
            <li>
              <a className='Gender'>Gender</a>
            </li>
            <li>
              <a className='Color'>Color</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className='Store-Grid'>
          
        </div>
    </div>
    
  );
}

export default Store;