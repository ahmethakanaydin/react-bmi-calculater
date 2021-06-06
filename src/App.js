import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DietList from "./pages/DietList";
import Home from "./pages/Home";
import Result from "./pages/Result";
import VkiNedir from "./pages/VkiNedir";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={VkiNedir} path="/vki-nedir" />
          <Route component={Result} path="/result" />
          <Route component={DietList} path="/diet-list" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
