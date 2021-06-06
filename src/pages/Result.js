import { Link } from "react-router-dom";
import { Button } from "../styles/Button.style";
import { Title, Li } from "../styles/Input.style";

const Result = () => {
  return (
    <div>
      <Title>
        Vücut Kitle İndeksiniz : {localStorage.getItem("vki") || "Hesaplanmadı"}
      </Title>
      <ul>
        <Li>İdeal Kilonun Altı &lt; 18.49 </Li>
        <Li>İdeal Kilo 18.5 - 24,99</Li>
        <Li>İdeal Kilonun Üzeri 25 - 29,99</Li>
        <Li>İdeal Kilonun Çok Üzeri &gt; 30</Li>
      </ul>

      <Link to="/">
        <Button>Tekrar Hesapla</Button>
      </Link>
      <Link to="/diet-list">
        <Button>Size Uygun Diyet Listesi</Button>
      </Link>
    </div>
  );
};

export default Result;
