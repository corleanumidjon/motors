import { Select } from "antd";
import { Button } from "antd";
import Logo from "../../Assets/Images/Logo.png";
import Container from "../../Utils/Container/Container";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <Container>
        <div className="nav__wrap">
          <ul className="nav__list">
            <li className="nav__item">
            <Link to="/">Bosh sahifa</Link>
            </li>
            <li className="nav__item">
            <Link to="/aboutus">Biz haqimizda</Link>
            </li>
            <li className="nav__item">
            <Link to="/models">Modellar</Link>
            </li>
            <li className="nav__item">
            <Link to="/news"> Yangiliklar</Link>
            </li>
            <Link to="/">
            <img className="nav__logo" src={Logo} alt="Logo" />
            </Link>
            <li className="nav__item">
            <Link to="/reviews">Izohlar</Link>
            </li>
            <li className="nav__item">
            <Link to="/lacation">Manzil</Link>
            </li>
          </ul>
          <div className="nav__select">
            <Select
              defaultValue="O'z"
              style={{
                width: 75,
                fontFamily: "Montserrat, sans-serif",
              }}
              options={[
                {
                  value: "uz",
                  label: "O'z",
                },
                {
                  value: "ru",
                  label: "Rus",
                },
                {
                  value: "en",
                  label: "Eng",
                },
              ]}
            />
          </div>
          <div>
            <Button className="nav__btn" type="primary">
            <Link to="/contact">Aloqa</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
