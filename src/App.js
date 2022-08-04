import "./App.css";
import Nav from "./components/nav/nav.js";
import Menu from "./components/menu/menu.js";
import Home from "./components/home/Home.js";
import SecThree from "./components/sectionthree/secThree.js";
import SecFour from "./components/sectfour/secFour.js";
import SecFive from "./components/secFive/SecFive.js";
import HackthonCom from "./components/hackthonSec/HackthonCom.js";
import Product from "./components/ProductSection/Product.js";
import Avangers from "./components/Avangers/Avangers";
import Partners from "./components/partner/partners.js";
import Footer from "./components/footer/footer.js";
import Learning from "./components/learning/Learning.js";
import { useState } from "react";

function App() {
  const [showCourses, setShowCourses] = useState(false);
  const [showCompany, setShowCompany] = useState(false);

  return (
    <div className="App">
      <div className="sectionOne">
        <Nav />
        <section className="containerr">
          <Menu
            showCompany={showCompany}
            setShowCompany={setShowCompany}
            showCourses={showCourses}
            setShowCourses={setShowCourses}
          />
          <Home
            showCompany={showCompany}
            setShowCompany={setShowCompany}
            showCourses={showCourses}
            setShowCourses={setShowCourses}
          />
        </section>
      </div>
      <SecThree />
      <SecFour />
      <SecFive />
      <Learning />
      <HackthonCom />
      <Product />
      <Avangers />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
