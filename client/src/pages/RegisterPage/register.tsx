import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'

export default function Account() {
 
  return (
  <div className="form">
    <div className='register'>
    <label className='registerbar'>REGISTER</label>
    <form>
      <div className="input-container">
        <label>Email </label>
        <input type="text" placeholder='Enter e-mail' name="email" required />
      </div>

      <div className="input-container">
        <label>Username </label>
        <input type="text" placeholder='Enter Username' name="uname" required />
      </div>

      <div className="input-container">
        <label>Password </label>
        <input type="password" placeholder='Enter password' name="pass" required />
      </div>

      <div className="button-container">
        <button type='submit'>Register</button>
      </div> 
    
    <span className="psw">Already have an account? <Link to="/account">Login!</Link></span>

    </form>
    </div>
    </div>
  )
}