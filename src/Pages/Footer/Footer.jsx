import Container from "../../Utils/Container/Container";
import "./Footer.scss";
import Logo from "../../Assets/Images/Logo.png";
import { BiLogoTelegram } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { PiYoutubeLogo } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { PiTiktokLogoFill } from "react-icons/pi";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <Container>
          <Link  to="/">
          <img className="footer__logo" src={Logo} alt="Logo" /> 
          </Link>
          
          <ul className="footer__col">
            <li>
              <Link to="https://www.facebook.com/search/top?q=dm%20gold%20motors">
                <FaFacebookF className="footer__ijtimoiy" />
              </Link>
            </li>
            <li>
               <Link to="https://t.me/dmgoldmotors">
              <BiLogoTelegram className="footer__ijtimoiy" />
               </Link>
            </li>
            <li>
                <Link to="https://www.instagram.com/dmgoldmotors/">
              <AiOutlineInstagram className="footer__ijtimoiy" />
                </Link>
            </li>
            <li>
                <Link to="https://www.youtube.com/@dmgoldmotors1">
              <PiYoutubeLogo className="footer__ijtimoiy" />
                </Link>
            </li>
            <li>
                <Link to="https://www.tiktok.com/@dmgoldmotors?_t=8gpUw1stzCU&_r=1">
                
              <PiTiktokLogoFill className="footer__ijtimoiy" />
                </Link>
            </li>
          </ul>
          <div className="footer__nav">
            <ul className="footer__item">
              <li className="footer__title">
                <Link to="/">Bosh sahifa</Link>
              </li>
              <li className="footer__title">
                <Link to="/aboutus">Biz haqimizda</Link>
              </li>
              <li className="footer__title">
              <Link to="/models">Modellar</Link>
              </li>
              <li className="footer__title">
              <Link to="/news"> Yangiliklar</Link>
               </li>
              <li className="footer__title">
              <Link to="/reviews">Izohlar</Link>
              </li>
              <li className="footer__title">
              <Link to="/contact">Aloqa</Link>
              </li>
            </ul>
          </div>
        </Container>
       
      </div>
    </div>
  );
};

export default Footer;
