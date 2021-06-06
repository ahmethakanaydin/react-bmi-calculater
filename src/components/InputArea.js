import { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Title } from "../styles/Input.style";
import { Button } from "../styles/Button.style";

const InputArea = () => {
  const [kilo, setKilo] = useState(0);
  const [boy, setBoy] = useState(0);
  const [vki, setVki] = useState();

  const Compute = () => {
    localStorage.setItem("kilo", kilo);
    localStorage.setItem("boy", boy);

    const vki = ((kilo / (boy * boy)) * 10000).toFixed(2);
    setVki(vki);
    localStorage.setItem("vki", vki);
  };
  /* useEffect(() => {
    localStorage.setItem("boy", boy);
    localStorage.setItem("kilo", kilo);
    localStorage.setItem("vki", vki);
  }, [boy, kilo, vki]); */

  return (
    <div>
      <Title>Vücut Kitle İndeksi Hesaplama</Title>
      <Input
        type="number"
        placeholder="Boy Giriniz(cm)"
        onChange={(e) => setBoy(e.target.value)}></Input>
      <br />
      <br />
      <Input
        type="number"
        placeholder="Kilo Giriniz(Kg)"
        onChange={(e) => setKilo(e.target.value)}></Input>
      <br />
      <br />
      <Link to="/result">
        <Button onClick={Compute}>Hesapla</Button>
      </Link>
    </div>
  );
};
export default InputArea;
