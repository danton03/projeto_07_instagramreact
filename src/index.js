import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Corpo from "./components/Corpo";
import FundoMobile from "./components/FundoMobile";

function App() {
  return(
    <>
      <Navbar />
      <Corpo />
      <FundoMobile />
    </>
  );  
}

ReactDOM.render(<App />, document.querySelector(".root"));