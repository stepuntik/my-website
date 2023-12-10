import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <p className="footer__text">
        Build from scratch with passion by{' '}
        <a
          href="https://www.linkedin.com/in/stepuntik/"
          className="footer__link"
        >
          Stepan Lavrenchuk
        </a>{' '}
        <span>&copy; {currentYear}</span>
      </p>
    </>
  );
};
export default Footer;
