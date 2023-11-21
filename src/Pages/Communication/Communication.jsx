import Container from "../../Utils/Container/Container";
import "./Communication.scss";
import { Input } from "antd";

import { FaBuildingColumns } from "react-icons/fa6";
import { BiTimeFive } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";

const Communication = () => {
  return (
    <div>
      <Container>
        <div className="communication">
          <form className="communication__form">
            <h2 className="communication__title">Biz bilan bog’lanish</h2>
            <div>
              <Input className="communication__input" placeholder="Ismingiz:" />
              ;
              <Input
                className="communication__input"
                placeholder="+998  |  Telefon raqamingizni kiriting:"
              />{" "}
              ;
              <Input className="communication__input" placeholder="Xabar" />;
            </div>
            <button className="communication__btn">Yuborish</button>
          </form>
          <ul className="communication__ul">
            <li className="communication__li">
              <div>
                <FaBuildingColumns className="communication__build" />
              </div>
              <div className="communication__box">
                <h4 className="communication__address">Bizning manzil:</h4>
                <p className="communication__mall">
                  Toshkent Shahri, Uchtepa tumani,
                  Katta xirmontepa 3A uy
                </p>
              </div>
            </li>
            <li className="communication__li">
              <div>
                <BiTimeFive className="communication__build" />
              </div>
              <div className="communication__box">
                <h4 className="communication__address">Ish vaqti:</h4>
                <p className="communication__mall">
                Dush - SHan: 9:00 dan 18:00 gacha 
                </p>
              </div>
            </li>
            <li className="communication__li">
              <div>
                 <BsTelephone className="communication__build" />
              </div>
              <div className="communication__box">
                <h4 className="communication__address">Sotuv bo’limi:</h4>
                <p className="communication__mall">
                🇺🇿 +998 33 010 47 00 <br/>
                🇺🇿 +998 90 007 72 33 <br/>
                🇨🇳 +86 187 9585 1393
                </p>
              </div>
            </li>
            
          </ul>

        </div>
      </Container>
    </div>
  );
};

export default Communication;
