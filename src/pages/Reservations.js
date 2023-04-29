import React, { useState } from 'react'
import '../Reservations.css';

function Reservations() {

    const [display, setDisplay] = useState(true);

    const handleCloseClick = () => {
        setDisplay(false);
        if (document.body.style.overflowY === 'hidden') {
          document.body.style.webkitOverflowScrolling = 'touch';
          document.body.style.overflowY = 'auto';
          document.body.style.scrollbarWidth = 'auto';
        }
      };

  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateInputFocus = () => {
    setShowCalendar(true);
  }

  return (
    <div style={{ display: display ? 'block' : 'none' }} className='reserve-all-div'>
        <div class="close-button1" onClick={handleCloseClick}><ion-icon name="close-outline"></ion-icon></div>
        <div className='reservation'>
            <div className='title1'>
                <p>RESERVATIONS</p>
            </div>
            <div className='NumberOfPeople boxes'>
                <label className="label1">Number of people -<span>Optional</span></label>
                <div class="input-container">
                    <div class="dropdown">
                        <select id="peopleList" name="peopleList">
                        <option value="" selected disabled hidden>Select an option</option>
                        <option value="1">1 person</option>
                        <option value="2">2 people</option>
                        <option value="3">3 people</option>
                        <option value="4">4 people</option>
                        <option value="5">5 people</option>
                        <option value="6">6 people</option>
                        <option value="7">7 people</option>
                        <option value="8">8+ people</option>
                        </select>
                    </div>
                </div>           
            </div>
           <div className='Date boxes'>
            <label className='label1 d'>Date- <span>Required</span></label>
            <div class="input-container">
                <input type={showCalendar ? 'date' : 'text'} onFocus={handleDateInputFocus} id="datePicker" name="datePicker" placeholder="Date"/>
            </div>
            <div className="button1">
                <button type="submit">FIND A TABLE</button>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Reservations
