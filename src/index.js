import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Corpo from "./components/Corpo";

function App() {
  return(
    <>
      <Navbar />
      <Corpo />
    </>
  );  
}

ReactDOM.render(<App />, document.querySelector(".root"));