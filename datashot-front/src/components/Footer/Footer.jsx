import './Footer.scss';

const Footer = () => {
  return <footer className='footer-container'>
    <p className="footer-text-paragraph">
        Denovann Belloir | {new Date().getFullYear()}
    </p>
  </footer>
}

export default Footer;