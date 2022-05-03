import "./Footer.css";

function Footer({ card, index }) {
  return (
    <footer className="flex-footer">
      <div className="footer flex-footer">
        <div className="inner-container-top flex-footer">
          <div className="left-links flex-footer">
            <a href="#">link #1</a>
            <a href="#">link #2</a>
            <a href="#">link #3</a>
          </div>
          <img src="./assets/logo.svg" alt="logo" srcset="" />
          <div className="right-links flex-footer">
            <a href="#">Our Services</a>
            <a href="#">Contact Us</a>
            <a href="#">About</a>
          </div>
        </div>
        <hr />
        <div className="inner-container-bottom">
          <a href="#">
            <img src="./assets/facebook-icon.svg" alt="" srcset="" />
          </a>
          <a href="#">
            <img src="./assets/twitter-icon.svg" alt="" srcset="" />
          </a>
          <a href="#">
            <img src="./assets/github-icon.svg" alt="" srcset="" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
