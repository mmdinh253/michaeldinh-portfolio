import React from 'react'
import './Contact.css'
import msg_icon from '../../images/msg-icon.png'
import mail_icon from '../../images/mail-icon.png'
import phone_icon from '../../images/phone-icon.png'
import location_icon from '../../images/location-icon.png'


const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "fa0f5d79-31dc-4940-801f-53ebadc91ee3");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send me a message</h3>
        <p>Feel free to reach out through contact form or find my contact
        information below. Your feedback, questions, and suggestions are
        important to me as I strive to be a great developer.</p>
        <ul>
            <li><img src={mail_icon} alt=""/>mmdinh253@gmail</li>
            <li><img src={phone_icon} alt=""/>+1 253-355-3290</li>
            <li><img src={location_icon} alt=""/>Tacoma, WA</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Email</label>
            <input type="tel" name='email' placeholder='Enter your email' required/>
            <label >Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact