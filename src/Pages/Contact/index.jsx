import React from 'react'
import "./index.scss"

function Contact() {
  return (
    <div id='contactPage'>
      <div className='contactHeader'><h1>CONTACT</h1></div>
      <div className='contactBox'>
        <div className='contactBoxLeft'>
          <h3 className='header'>Send Us A Message</h3>
          <div className='contactInput'>
            <i class="fa-regular fa-envelope"></i>
            <input type="text" placeholder='Your Email Adress' />
          </div>
          <div className='contactMessage'>
            <textarea className='message' name="" id="" cols="30" rows="10" placeholder='How Can We Help?'></textarea>
          </div>
          <button className='btn'>SUBMIT</button>
        </div>
        <div className='contactBoxRight'>
          <div className='adress'>
            <div className='icon'><i class="fa-solid fa-location-dot"></i></div>
            <div className='text'>
              <div className='head'>
                Address</div>
              <div className='main'>

                Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</div>
            </div>
          </div>
          <div className='letsTalk'>
            <div className='icon'><i class="fa-solid fa-phone"></i></div>
            <div className='text'>
              <div className='head'>
                Lets Talk</div>
              <div className='main'>+1 800 1236879</div>
            </div>
          </div>
          <div className='saleSupport'>
            <div className='icon'><i class="fa-solid fa-location-dot"></i></div>
            <div className='text'>
              <div className='head'>
                Sale Support</div>
              <div className='main'>contact@example.com</div>
            </div>
          </div>
        </div>

      </div>
        <div className='map'>
              <iframe className='googleMap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.2717872854423!2d49.8425403765291!3d40.38066855783261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d752dad9af1%3A0x8518dedab5541e44!2zRFZDICgiVsmZdMmZbmRhxZ8gQ8mZbWl5ecmZdGluZMmZIERlYmF0IiDEsGN0aW1haSBCaXJsaXlpKQ!5e0!3m2!1sen!2saz!4v1702654004772!5m2!1sen!2saz" ></iframe>
        </div>
    </div>
  )
}

export default Contact