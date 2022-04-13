import "./Services.css";
import Card from "./Card";

const cardData = require("../data/data.json");

function Services() {


  return (
    <section id="our-services" className="services container">
      <div className="background">
        <svg
          className="svg1"
          width="900"
          height="900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M267 2.93409C349.983 15.0938 386.798 106.632 444.327 167.661C498.791 225.438 589.548 265.588 589.442 344.988C589.335 424.366 501.85 467.646 443.853 521.842C389.101 573.005 341.323 636.723 267 646.295C184.435 656.928 91.7538 637.574 37.8614 574.127C-13.8921 513.198 12.6223 424.916 11.0695 344.988C9.46166 262.228 -20.8078 173.048 28.7818 106.771C82.7288 34.6697 177.902 -10.1215 267 2.93409Z"
          />
        </svg>
        <svg
          className="svg2"
          width="900"
          height="900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M267 2.93409C349.983 15.0938 386.798 106.632 444.327 167.661C498.791 225.438 589.548 265.588 589.442 344.988C589.335 424.366 501.85 467.646 443.853 521.842C389.101 573.005 341.323 636.723 267 646.295C184.435 656.928 91.7538 637.574 37.8614 574.127C-13.8921 513.198 12.6223 424.916 11.0695 344.988C9.46166 262.228 -20.8078 173.048 28.7818 106.771C82.7288 34.6697 177.902 -10.1215 267 2.93409Z"
          />
        </svg>
      </div>
      <div className="text">
        <h1>Our Services</h1>
      </div>
      <div className="contant">
        {cardData.map((card, index) => {
          return <Card card={card} index={index} />;
        })}
      </div>
    </section>
  );
}

export default Services;
