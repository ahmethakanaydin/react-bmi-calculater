import { Link } from "react-router-dom";
import { Title, Li } from "../styles/Input.style";
import { Button } from "../styles/Button.style";
const DietList = () => {
  return (
    <div>
      <Title>Diyet Listesi</Title>
      <Li>Hazırlanıyor..</Li>
      <Link to="/result">
        <Button>Sonuçlara Geri Dön</Button>
      </Link>
    </div>
  );
};

export default DietList;
