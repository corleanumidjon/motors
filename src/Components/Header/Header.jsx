import Container from "../../Utils/Container/Container";
import LixiangL9 from "../../Assets/Videos/LixiangL9.mp4";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div>
        <video
          autoPlay
          loop
          playsInline
          muted
          type="video/mp4"
          className="header__video"
          src={LixiangL9}
        ></video>
      </div>
      <Container>
        <div className="header__titles">
            <h1 className="header__title">DM <span className="header__span">GOLD</span> MOTORS</h1>
            <h2 className="header__title2">O'z <span className="header__span">qadrini</span> bilganlar uchun</h2>
            <button className="header__btn">START</button>
        </div>
      </Container>
    </div>
  );
};

export default Header;
