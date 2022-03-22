import "./App.css";
import { Fade, Slide } from "react-awesome-reveal";
import Services from "./components/Services";
import Form from "./components/Form";


function App() {
  return (
    <div className="App">
      <section className="hero">
        <svg
          class="svg scale"
          id="star1"
          width="1.8vw"
          height="1.8vw"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.8571 0H20.4286L21 20L20.4286 40H19.8571L19 20L19.8571 0Z"
            fill="#FFDA19"
          />
          <path
            d="M0 20.1429L0 19.5714L20 19L40 19.5714V20.1429L20 21L0 20.1429Z"
            fill="#FFDA19"
          />
        </svg>
        <svg
          className="svg scale"
          id="star2"
          width="1.4vw"
          height="1.4vw"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.8571 0H20.4286L21 20L20.4286 40H19.8571L19 20L19.8571 0Z"
            fill="#FFDA19"
          />
          <path
            d="M0 20.1429L0 19.5714L20 19L40 19.5714V20.1429L20 21L0 20.1429Z"
            fill="#FFDA19"
          />
        </svg>

        <div className="background"></div>
        <header>
          <div className="header-container container">
            <div className="logo">
              <img src="./assets/logo.svg" alt="logo" srcset="" />
            </div>
            <nav className="nav-bar">
              <ul>
                <li>
                  <a className="redirect" href="#about">
                    Our Services
                  </a>
                </li>
                <li>
                  <a className="redirect" href="#skills">
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
      <section className="info container">
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
      <Form/>


    </div>
  );
}

export default App;
