import "./Footer.css";

function Footer({ card, index }) {
  return (
    <footer>
      <div className="footer container">
        <div className="inner-container-top">
          <div className="left-links">
            <a href="#">GitHub page 1</a>
            <a href="#">GitHub page 1</a>
            <a href="#">GitHub page 1</a>
          </div>
          <div className="right-links">
            <a href="#">Our Services</a>
            <a href="#">Contact Us</a>
            <a href="#">About</a>
          </div>
        </div>
        <div className="inner-container-bottom">
          <img src="" alt="" srcset="" />
          <img src="" alt="" srcset="" />
          <img src="" alt="" srcset="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
