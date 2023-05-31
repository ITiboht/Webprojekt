import React, {useState} from 'react'
import axios from 'axios' ;
import './account.css'

export default function Account() {
  const [registrationError, setRegistrationError] = useState('');
  
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

const handleRegistration = async (event) => {
  event.preventDefault();

  const form = event.target;
  const email = form.email.value;
  const username = form.uname.value;
  const password = form.pass.value;

  try {
    const response = await axios.post('ide kellene az endpoint', {
      email,
      username,
      password,
    });

    console.log('Registration successful');
    console.log(response.data); // Az API válasza

    // További teendők a sikeres regisztráció esetén

    // Példa: Átirányítás a bejelentkezéshez
    togglelog();
  } catch (error) {
    console.error('Registration failed');
    console.error(error.response.data); // A hibaüzenet az API-tól

    setRegistrationError('Registration failed. Please try again.'); // Beállítjuk a regisztrációs hiba üzenetét
  }
};

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
      <span className="psw">Don't have an account? Register <a href="#">here!</a></span>
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
    <span className="psw">Already have an account? <a href="/account">Login!</a></span>
    </h1>
    {registrationError && <p className="error">{registrationError}</p>}

    </form>
    </div>
  </div>

  )
}