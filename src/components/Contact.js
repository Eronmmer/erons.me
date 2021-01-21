import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
      <h2 id="contact" className="contact-header">
        CONTACT ME
      </h2>
      <ul className="social-list">
        <li title="Follow me on Twitter">
          <a
            href="http://twitter.com/erons_xo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-icon"
              src="https://res.cloudinary.com/djksghat4/image/upload/v1574165729/erons.me/Twitter.svg"
              alt="Twitter"
            />
          </a>
        </li>
        <li title="View my LinkedIn profile">
          <a
            href="http://linkedin.com/in/eronmmer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-icon"
              src="https://res.cloudinary.com/djksghat4/image/upload/v1574165729/erons.me/Linkedin.svg"
              alt="LinkedIn"
            />
          </a>
        </li>
        <li title="Check out my open source projects">
          <a
            href="http://github.com/eronmmer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-icon"
              src="https://res.cloudinary.com/djksghat4/image/upload/v1574165728/erons.me/Github.svg"
              alt="GitHub"
            />
          </a>
        </li>
        <li title="Send me a message on WhatsApp">
          <a
            href="http://api.whatsapp.com/send?phone=2348153300617"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-icon"
              src="https://res.cloudinary.com/djksghat4/image/upload/v1574165730/erons.me/Whatsapp.svg"
              alt="WhatsApp"
            />
          </a>
        </li>
        <li title="Email me">
          <a href="mailto:eronmmer@gmail.com">
            <img
              className="social-icon"
              src="https://res.cloudinary.com/djksghat4/image/upload/v1574171241/erons.me/envelope.svg"
              alt="Email"
            />
          </a>
        </li>
        <li title="Call me">
          <a href="tel:+2348153300617">
            <img
              className="social-icon"
              src="https://res.cloudinary.com/djksghat4/image/upload/v1574171242/erons.me/phone.svg"
              alt="Phone"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact
