import { Link } from "react-router-dom";
import { Ul, Li } from "../styles/Navbar.style";

const Navbar = () => {
  return (
    <Ul>
      <Link className="a" to="/">
        <Li className="test">VKI Hesapla</Li>
      </Link>
      <Link className="a" to="/vki-nedir">
        <Li>VKI Nedir?</Li>
      </Link>
    </Ul>
  );
};

export default Navbar;
