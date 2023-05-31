import React from 'react'
import './shipping.css'
import {Route, Routes} from 'react-router-dom'



export default function() {



  return (
    <div className='Shipping-Page'>



        <label className='Kerdes'>What delivery options do we offer on our website?</label>
        <span className='informacio'>For those who are registered, delivery is free, and we can also send seasonal promotions.</span>
        
        <div>
        <span className="accountpage">Go to account <a href="/account">page!</a></span>
        </div>

        <div className='shippings'>
          <p>Normal shipping (3-7 workday)</p>
          <li className='dij'>Home (5 euro)</li>
          <li className='dij'>FoxPost (2 euro)</li>
          <p>Express shipping (1-2 workday)</p>
          <li className='dij'>20 euro</li>
        </div>

        <div className='kep'>
        <img src="https://th.bing.com/th/id/R.77324b7bffe240d5a698091928296d44?rik=fdlLXNIjIY9u5g&riu=http%3a%2f%2fthesplendidlifestyle.com%2fwp-content%2fuploads%2f2019%2f08%2fdelivery.png&ehk=6it3QaR03%2bUA%2fYaNsq5JJQvYeFoIx8eusDr1b59eMps%3d&risl=&pid=ImgRaw&r=0" alt="Delivery" />
        </div>

        </div>
  )
}
