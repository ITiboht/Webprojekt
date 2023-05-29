import React from 'react'
import './store.css';
import logo from '../../images/logo.png';

const Store = () => {

  return (
    <div className='Store-Page'>
      <div className='row'>
        <div className='col'>
        <h1 className='Header'>Explore the possibilities</h1>
        <a>Great deals for great shoes!</a>
        </div>
      <div className='row'>
        <div className='col filter'>
        <div className='Store-Filter'>
        <div>
          <span>Brand</span>
          <ul className='Brand'>
            <li>
            <input type='checkbox' />
              <label>Nike</label>
            </li>
          </ul>
        </div>
        <div>
          <span>Size</span>
          <ul className='Size'>
            <li>
              <input type='checkbox' id='size-1' name='size-1' />
              <label htmlFor='size-1'>Size 1</label>
            </li>
          </ul>
        </div>
        <div>
          <span>Gender</span>
          <ul className='Gender'>
            <li>
              <input type='checkbox' id='gender-1' name='gender-1' />
              <label htmlFor='gender-1'>Gender 1</label>
            </li>
          </ul>
        </div>
        <div>
          <span>Color</span>
          <ul className='Color'>
            <li>
              <input type='checkbox' id='color-1' name='color-1' />
              <label htmlFor='color-1'>Color 1</label>
            </li>
          </ul>
        </div>  
      </div>
        </div>
        <div className='col'>
        <div className='Store-Grid'>
          <div className='Store-Item'>
            <img src={logo} alt='logo' />
            <div className='Store-Item-Info'>
              <h3>Name</h3>
              <h4>Cost</h4>
              <button>Buy Now</button>
            </div>
          </div>
          <div className='Store-Item'>
            <img src={logo} alt='logo' />
            <div className='Store-Item-Info'>
              <h3>Name</h3>
              <h4>Cost</h4>
              <button>Buy Now</button>
            </div>
          </div>
          <div className='Store-Item'>
            <img src={logo} alt='logo' />
            <div className='Store-Item-Info'>
              <h3>Name</h3>
              <h4>Cost</h4>
              <button>Buy Now</button>
            </div>
          </div>
          <div className='Store-Item'>
            <img src={logo} alt='logo' />
            <div className='Store-Item-Info'>
              <h3>Name</h3>
              <h4>Cost</h4>
              <button>Buy Now</button>
            </div>
          </div>
          <div className='Store-Item'>
            <img src={logo} alt='logo' />
            <div className='Store-Item-Info'>
              <h3>Name</h3>
              <h4>Cost</h4>
              <button>Buy Now</button>
            </div>
          </div>
          <div className='Store-Item'>
            <img src={logo} alt='logo' />
            <div className='Store-Item-Info'>
              <h3>Name</h3>
              <h4>Cost</h4>
              <button>Buy Now</button>
            </div>
          </div>
          <div className='Store-Item'>
            <img src={logo} alt='logo' />
            <div className='Store-Item-Info'>
              <h3>Name</h3>
              <h4>Cost</h4>
              <button>Buy Now</button>
            </div>
          </div>
          <div className='Store-Item'>
            <img src={logo} alt='logo' />
            <div className='Store-Item-Info'>
              <h3>Name</h3>
              <h4>Cost</h4>
              <button>Buy Now</button>
            </div>
          </div>
          <div className='Store-Item'>
            <img src={logo} alt='logo' />
            <div className='Store-Item-Info'>
              <h3>Name</h3>
              <h4>Cost</h4>
              <button>Buy Now</button>
            </div>
          </div>
          <div className='Store-Item'>
            <img src={logo} alt='logo' />
            <div className='Store-Item-Info'>
              <h3>Name</h3>
              <h4>Cost</h4>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    
  );
}

export default Store;