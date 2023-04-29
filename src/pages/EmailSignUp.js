import React from 'react'
import '../EmailSignUp.css';

function EmailSignUp() {
  return (
    <div>
        <div class="close-button"><ion-icon name="close-outline"></ion-icon></div>
      <div className="pop-Up">
        <div className="title">
          <h>EMAIL SIGNUP</h>
        </div>
        <div className="firstName box">
          <label className="labelFormat">
            First Name -<span className="W"> Required</span>
          </label>
          <input className="textBox" type="text" placeholder="First Name" />
        </div>
        <div className="firstName box">
          <label className="labelFormat">
            Last Name -<span className="W"> Required</span>
          </label>
          <input className="textBox" type="text" placeholder="Last Name" />
        </div>
        <div className="firstName box">
          <label className="labelFormat">
            Email -<span className="W"> Required</span>
          </label>
          <input className="textBox" type="email" placeholder="Email" />
        </div>
        <div className="button">
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default EmailSignUp
