
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
