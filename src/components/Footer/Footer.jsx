import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <p className="footer__text">
        Build from scratch with ❤️ by Stepan Lavrenchuk{' '}
        <span>&copy; {currentYear}</span>
      </p>
    </>
  );
};
export default Footer;
