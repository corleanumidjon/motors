import Container from "../../Utils/Container/Container";
import Zekeer from "../../Assets/Images/Zekeer.png";
import "./AboutUs.scss";
const AboutUs = () => {
  return (
    <div>
      <Container>
        <div className="AboutUs">
          <h2 className="AboutUs__title">Biz haqimizda</h2>
          <div className="AboutUs__title1">
            <p className="AboutUs__title2">
              <span>DM Gold Motors</span> Xitoydan buyurtma asosida turli
              xildagi mashinalar olib kelib berish bilan shug'ullanadi.
              2021-yildan beri mijozlar uchun qonuniy xizmat ko'rsatib keladi
              Sifatli xizmat va arzon narxlar faqatgina{" "}
              <span>DM Gold Motors</span>da
            </p>
            <img className="AboutUs__zekeer" src={Zekeer}></img>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
