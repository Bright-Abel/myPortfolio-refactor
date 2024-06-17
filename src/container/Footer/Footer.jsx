import './Footer.scss';
import { images } from '../../constant';
import { AppWrap, MotionWrap } from '../../wrapper';
import { useState } from 'react';
const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setIsLoading] = useState(false);
  return (
    <>
      <h2 className="head-text">Contact Me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:oluwasegunbarnabas@gmail.com" className="p-text">
            oluwasegunbarnabas@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="email" />
          <a href="tel: +234 90-6705-9501" className="p-text">
            +234 90-6705-9501
          </a>
        </div>
      </div>

      <form
        action="https://formspree.io/f/mpzvvbyo"
        method="POST"
        className="app__footer-form app__flex"
      >
        <div className="app__flex">
          <input
            type="text"
            className="p-text"
            // value={name}
            // onChange={handleChange}
            placeholder="Your Name"
            name="name"
            id=""
          />
        </div>
        <div className="app__flex">
          <input
            type="email"
            className="p-text"
            // value={email}
            // onChange={handleChange}
            placeholder="Your email"
            name="email"
            id=""
          />
        </div>

        <div className="app__flex">
          <textarea
            name="message"
            // value={message}
            // onChange={handleChange}
            placeholder="Your Message"
            id=""
          />
        </div>

        <button type="submit" className="p-text">
          Send Message
        </button>
      </form>
    </>
  );
};
export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
