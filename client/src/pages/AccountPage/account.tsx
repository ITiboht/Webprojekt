import React from 'react'
import './account.css'

export default function Account() {
  return (
    <div className="form">
    <form>
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="uname" required />
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" required />
      </div>
      <div className="button-container">
        <input type="submit" />
      </div>
    </form>
  </div>
  )
}

function renderForm() {
  <div className="form">
    <form>
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="uname" required />
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" required />
      </div>
      <div className="button-container">
        <input type="submit" />
      </div>
    </form>
  </div>
};