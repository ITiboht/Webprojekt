import React from 'react'
import './account.css'

export default function Account() {

  const togglelog = () => {
    const login = document.querySelector('.reg');
    login?.classList.toggle('show');
    const register = document.querySelector('.login');
  register?.classList.toggle('hide');
}

const togglereg = () => {
  const login = document.querySelector('.reg');
    login?.classList.toggle('show');
  const register = document.querySelector('.login');
  register?.classList.toggle('hide');
}


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

      <h1 onClick={togglereg}> 
        Change to Registration
      </h1> 

    </form>
    </div>
    <div className='reg'>
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
        <button type="submit">Register</button>
      </div>
      

    <h1 onClick={togglelog}>
      Change to Login
    </h1>
    </form>
    </div>
  </div>

  )
}