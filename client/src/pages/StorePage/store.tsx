import React from 'react'
import './store.css';
import logo from '../../images/logo.png';
import DataFetching from '../../components/http/DataFetching.tsx';

const Store = () => {

  /*
  <div className='Store-Item'>
  <img src={logo} alt='logo' />
  <div className='Store-Item-Info'>
    <h3>NAME</h3>
    <h4>COST</h4>
    <button>Buy Now</button>
  </div>
  </div>
  */


  return (
    <DataFetching/>
  );
}

export default Store;