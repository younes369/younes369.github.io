import "./App.css";
import { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Services from "./components/Services";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  var [display, setDisplay] = useState(true);
  var [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  return (
    <div className="App">
      <section className="hero">
        <div className="background"></div>
        <header>
          <div className="header-container container">
            <div className="logo">
              <img src="./assets/logo.svg" alt="logo" srcset="" />
            </div>
            <nav
              style={display && width < 700 ? { display: "none" } : {}}
              className="nav-bar"
            >
              <ul>
                <li>
                  <a className="redirect" href="#our-services">
                    Our Services
                  </a>
                </li>
                <li>
                  <a className="redirect" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="redirect" href="#contact">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
            <img
              onClick={() => {
                setDisplay(!display);
              }}
              className="h-menu"
              src="./assets/h-menu.svg"
              alt="hamburger menu"
              srcset=""
            />
          </div>
        </header>
        <div className="main-section-hero">
          <Slide triggerOnce>
            <img
              className="hero-logo float"
              src="./assets/logo.svg"
              alt=""
              srcset=""
            />
          </Slide>
          <Fade delay={1000} triggerOnce>
            <h2 id="hero-text">For IT Solutions</h2>
          </Fade>
        </div>
      </section>
      <Services />
      <section id="about" className="info container">
        <div className="buble1 float">
          <svg
            className="rec float2"
            width="178"
            height="200"
            viewBox="0 0 178 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.83013"
              y="5.83013"
              width="160"
              height="19.2942"
              transform="matrix(0.866025 -0.5 -0.5 -0.866025 25.4771 187.956)"
              stroke="#FFDA19"
              stroke-width="8"
            />
            <rect
              x="1.28109"
              y="-4.78109"
              width="116.91"
              height="14.9903"
              transform="matrix(0.866025 -0.5 -0.5 -0.866025 67.6878 72.7179)"
              stroke="#F37F2A"
              stroke-width="8"
            />
          </svg>
        </div>
        <div className="buble2 float">
          <svg
            className="cross float2"
            width="116"
            height="179"
            viewBox="0 0 116 179"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2"
              y1="-2"
              x2="62.0006"
              y2="-2"
              transform="matrix(0.834606 -0.550847 0.550854 0.834601 2.38611 169.483)"
              stroke="#4272EC"
              stroke-width="4"
              stroke-linecap="round"
            />
            <line
              x1="14.8658"
              y1="125.525"
              x2="47.0176"
              y2="174.239"
              stroke="#4272EC"
              stroke-width="4"
              stroke-linecap="round"
            />
            <line
              x1="32.9468"
              y1="88.6539"
              x2="96.2279"
              y2="4.07618"
              stroke="#FFDA19"
              stroke-width="6"
              stroke-linecap="round"
            />
            <line
              x1="28.8331"
              y1="13.2209"
              x2="111.089"
              y2="74.7651"
              stroke="#FFDA19"
              stroke-width="6"
              stroke-linecap="round"
            />
          </svg>
          <div className="secondery-buble"></div>
        </div>
        <Fade duration={2000}>
          <div className="about-section">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At nisi
              labore ipsum necessitatibus! Rerum, voluptatibus deserunt
              quisquam, exercitationem accusantium distinctio consequuntur autem
              quidem assumenda ullam nesciunt optio doloremque obcaecati sunt.
            </p>
          </div>
        </Fade>
        <Fade duration={2000}>
          <div className="who-are-we-section">
            <h1>Who Are We?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              veniam. Eveniet aut voluptatum ratione delectus iusto velit quas,
              accusamus esse animi optio, soluta sapiente ex praesentium, vitae
              ipsum eaque corporis?
            </p>
          </div>
        </Fade>
      </section>
      <section className="contact-us container">
        <section className="contact-us-banner container">
          <div className="lhs-contact-us-banner">
            <h1>Contact Us</h1>
          </div>
          <div className="rhs-contact-us-banner">
            <div className="flex-banner">
              <img src="./assets/phone-number.svg" alt="phone number" />
              <p>Phone Number</p>
            </div>
            <div className="flex-banner">
              <img src="./assets/email.svg" alt="phone number" />
              <p>Email</p>
            </div>
          </div>
        </section>
        <Form />
      </section>
      <Footer />
    </div>
  );
}

export default App;
