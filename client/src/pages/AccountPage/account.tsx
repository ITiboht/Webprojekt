import React, {useState} from 'react'
import axios from 'axios' ;
import './account.css'
import { Link } from 'react-router-dom';

export default function Account() {
  

  return (
    <div className="form">
      <div className='login'>
      <label className='loginbar'>LOGIN</label>
    <form>
      <div className="input-container">
        <label>Username </label>
        <input type="text" placeholder='Enter Username' name="uname" required />
      </div>

      <div className="input-container">
        <label>Password </label>
        <input type="password" placeholder='Enter Password' name="pass" required />
      </div>

      <div className="button-container">
        <button type="submit">Login</button>
      </div>

      <span className="psw">Don't have an account? Register <Link to="/register">here!</Link></span>

    </form>
    </div>
    </div>

  )
}