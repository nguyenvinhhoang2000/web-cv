import logo from "./logo.svg";
import "./App.scss";
import Header from "features/Header/header";
import Logo from "assets/img/logo.jpg";
import ScrollParallax from "features/ScrollParallax/scrollparallax";
import Lorem from "features/Lorem/lorem";

function App() {
  return (
    <div className='app'>
      <Header />
      <ScrollParallax />

      <Lorem />
    </div>
  );
}

export default App;
