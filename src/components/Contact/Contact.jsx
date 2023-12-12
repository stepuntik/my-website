import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

import './Contact.css';

const Contact = ({ id }) => {
  return (
    <section className="contact " id="contact">
      <h2 className="contact__title uppercase">Connect With Me</h2>
      <div className="contact__description-container">
        <h3 className="contact__description">
          Have a work opportunity for me or an exciting project you need help
          with?
        </h3>
        <h4 className="contact__description">
          Send me an email or connect with me here:
        </h4>
      </div>
      <div className="contact__links-container">
        <a
          className="contact__link linkedin"
          href="https://www.linkedin.com/in/stepuntik/"
        >
          <FaLinkedin />
        </a>
        <a className="contact__link gihub" href="https://github.com/stepuntik">
          <FaGithub />
        </a>
        <a
          className="contact__link email"
          href="mailto:steven.lavrenchuk@gmail.com"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};
export default Contact;
