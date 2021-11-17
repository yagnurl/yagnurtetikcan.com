import {useState} from 'react'
import "./contact.scss"

export default function Contact() {
    const [message, setMessage]  = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);

    }
    return (
        <div className="contact" id="contact">
          <div className="left">
              <img src="assets/shake.svg" alt="" />
          </div>
          <div className="right">
              <h2>Contact.</h2>
                  <form action="" onSubmit={handleSubmit}>
                      <input type="text" placeholder="Email " />
                      <textarea placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
                      <button type="submit">Send</button>
                      {message && <span>Thanks, I will reply ASAP :) </span> }
                  </form>
            
          </div>
        </div>
    )
}
