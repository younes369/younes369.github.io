import react, { useState } from "react";
import "./Form.css"


const cardData = require("../data/card-data.json");

function Form() {
  var [selected, setSelected] = useState(" ");
  console.log(selected);
  return (
    <section className="form-container container">
      <div className="lhs-form">
        <h1>Contact Form</h1>
        <form className="form" action="">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="PhoneNum">Phone Number:</label>
          <input type="text" name="PhoneNum" id="PhoneNum" />
          <label htmlFor="budget">Budget:</label>
          <input type="text" name="budget" id="budget" />
          <label htmlFor="description">Description:</label>
          <textarea type="text" name="description" id="description" />
          <label htmlFor="services">Select Services:</label>
          <div name="services" className="select-services">
            {cardData.map((card, index) => {
              return (
                <div
                  onClick={() => {
                    setSelected(`${card["title"]}`);
                  }}
                  className="input"
                  key={index}
                >
                  <div className="services-text">
                    <p>{card["title"]}</p>
                  </div>
                  <img
                    src={card["icon"]}
                    name="web-development"
                    alt="web development"
                    srcset=""
                  />
                </div>
              );
            })}
          </div>
          <div className="submit-button">
            <button className="custom-button neutral-button">Submit</button>
          </div>
        </form>
      </div>
      <div className="rhs-form">
        <h1>We’d love to hear from you.</h1>
      </div>
    </section>
  );
}

export default Form;
