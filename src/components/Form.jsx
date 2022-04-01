import react, { useState } from "react";
import "./Form.css";

const data = require("../data/data.json");

function Form() {
  var [selected, setSelected] = useState(" ");
  var [clicked, setClicked] = useState(null);

  const submit = async (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        phoneNum: event.target.phoneNum.value,
        budget: event.target.budget.value,
        description: event.target.description.value,
        subject: selected,
      }),
    }).then(() => { setSelected(" ");setClicked(null);})
  };

  return (
    <section className="form-container container">
      <div className="lhs-form">
        <h1>Contact Form</h1>
        <form onSubmit={submit} className="form" action="">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="phoneNum">Phone Number:</label>
          <input type="text" name="phoneNum" id="phoneNum" />
          <label htmlFor="budget">Budget:</label>
          <input type="text" name="budget" id="budget" />
          <label htmlFor="description">Description:</label>
          <textarea type="text" name="description" id="description" />
          <label htmlFor="services">Select Services:</label>
          <div name="services" className="select-services">
            {data.map((data, index) => {
              return (
                <div
                  onClick={() => {
                    setClicked(index);
                    setSelected(`${data["title"]}`);
                  }}
                  className="input"
                  key={index}
                >
                  <div className="services-form-text">
                    <p>{data["title"]}</p>
                  </div>
                  <img
                    src={clicked == index ? data["icon"] : data["icon2"]}
                    style={clicked == index ? { transform: "scale(0.85)" } : {}}
                    name={data["title"]}
                    alt={data["title"]}
                    srcset=""
                  />
                </div>
              );
            })}
          </div>
          <div className="submit-button">
            <button className="custom-button neutral-button" type="submit">
              Submit
            </button>
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
