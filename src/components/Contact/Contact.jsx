import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

import './Contact.css';

const Contact = ({ id }) => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">Connect With Me</h2>
      <div className="contact__description-container">
        <h3 className="contact__description">
          Have a work opportunity for me or an exciting project you need help
          with?
        </h3>
        <h4 className="contact__description">
          Send me an email or contact me via instant message!
        </h4>
      </div>
      <div className="contact__links-container">
        <a
          className="contact__link"
          href="https://www.linkedin.com/in/stepuntik/"
        >
          <FaLinkedin />
        </a>
        <a className="contact__link" href="https://github.com/stepuntik">
          <FaGithub />
        </a>
        <a className="contact__link" href="mailto:steven.lavrenchuk@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};
export default Contact;
