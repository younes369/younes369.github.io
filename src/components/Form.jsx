import react, { useState } from "react";
import "./Form.css";

const data = require("../data/data.json");
const url = "https://intense-badlands-13091.herokuapp.com/";

function Form() {
  var [selected, setSelected] = useState(" ");
  var [clicked, setClicked] = useState(false);
  var [emailStatus, setEmailStatus] = useState(" ");
  var [display, setDispaly] = useState("none");
  var [delivered, setDelivered] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    var data = {
      name: event.target.name.value,
      email: event.target.email.value,
      phoneNum: event.target.phoneNum.value || 0,
      budget: event.target.budget.value || 0,
      description: event.target.description.value,
      subject: selected,
    };

    console.log(data);
    if (clicked) {
      fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((message) => {
          if (message["message"] == "Email has been sent successfully!") {
            setDelivered(true);
          } else {
            setDelivered(false);
          }
          setSelected(" ");
          setClicked(null);
          setEmailStatus(`${message["message"]}`);
          setDispaly("flex");
          setTimeout(() => {
            setDispaly("none");
          }, 4500);
        });
    } else {
      alert("please chose a servise");
    }
  };

  return (
    <section className="form-container container">
      <div className="email-status" style={{ display: display }}>
        {delivered ? (
          <svg
            width="92"
            height="81.7"
            viewBox="0 0 92 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="mark-animation"
              d="M76.1859 33.4462C77.1748 33.2841 78.1114 33.9595 78.2266 34.9613C79.2776 44.1047 77.1236 53.3532 72.104 61.0926C66.7531 69.3428 58.5321 75.2823 49.0545 77.7455C39.5768 80.2088 29.5266 79.0179 20.8764 74.4067C12.2261 69.7954 5.60022 62.0967 2.29905 52.8213C-1.00213 43.5459 -0.740255 33.3636 3.03327 24.2726C6.8068 15.1815 13.8195 7.83817 22.6952 3.68356C31.571 -0.471052 41.6688 -1.13694 51.0072 1.81658C59.7674 4.58723 67.2659 10.3553 72.2222 18.0905C72.7652 18.9381 72.4677 20.0585 71.6015 20.5653C70.7352 21.0722 69.6286 20.7733 69.0816 19.9283C64.5831 12.9796 57.8161 7.79834 49.9195 5.30082C41.4446 2.62039 32.2804 3.2247 24.2253 6.99517C16.1702 10.7656 9.8059 17.43 6.38128 25.6805C2.95665 33.931 2.71899 43.1718 5.71494 51.5896C8.71088 60.0073 14.7241 66.9942 22.5746 71.1792C30.425 75.3641 39.5459 76.4448 48.1473 74.2093C56.7487 71.9738 64.2095 66.5835 69.0657 59.0961C73.5904 52.1197 75.5495 43.7921 74.641 35.5488C74.5306 34.5465 75.1969 33.6082 76.1859 33.4462Z"
            />
            <path
              className="mark-animation"
              d="M40.9867 42.5687L89.1843 4.45226C89.1843 4.45226 90.5415 3.09895 91.6299 4.45225C92.7183 5.80555 91.0596 6.86821 91.0596 6.86821L43.0546 44.6191L40.2184 46.822L32.6636 37.0266C32.6636 37.0266 32.0254 36.0777 33.1117 35.1111C34.198 34.1445 35.0874 35.1111 35.0874 35.1111L40.9867 42.5687Z"
            />
          </svg>
        ) : (
          <svg
            width="96"
            height="82"
            viewBox="0 0 96 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="mark-animation2"
              d="M79.4983 34.7163C80.5302 34.5481 81.5076 35.2491 81.6277 36.289C82.7244 45.7795 80.4768 55.3793 75.239 63.4126C69.6554 71.9761 61.077 78.1411 51.1873 80.6979C41.2975 83.2547 30.8104 82.0186 21.784 77.2322C12.7577 72.4459 5.84371 64.4548 2.399 54.8272C-1.0457 45.1996 -0.77244 34.6306 3.16515 25.1943C7.10274 15.7581 14.4204 8.13582 23.682 3.82344C32.9436 -0.48894 43.4805 -1.18011 53.2249 1.88556C62.366 4.76143 70.1905 10.7486 75.3623 18.7775C75.9289 19.6573 75.6185 20.8202 74.7146 21.3463C73.8107 21.8724 72.6559 21.5621 72.0851 20.6851C67.3911 13.4725 60.3299 8.09448 52.0899 5.50212C43.2465 2.7199 33.6838 3.34716 25.2786 7.26081C16.8733 11.1745 10.2322 18.0919 6.65872 26.6557C3.0852 35.2195 2.83721 44.8113 5.96341 53.5487C9.08961 62.2861 15.3643 69.5383 23.5561 73.8822C31.7479 78.226 41.2653 79.3478 50.2407 77.0274C59.216 74.707 67.0012 69.112 72.0685 61.3403C76.79 54.099 78.8342 45.4551 77.8863 36.8988C77.771 35.8583 78.4663 34.8845 79.4983 34.7163Z"
            />
            <path
              className="mark-animation2"
              d="M23.1185 22.6528C22.5306 22.0649 22.5306 21.1117 23.1185 20.5239C23.7064 19.936 24.6595 19.936 25.2474 20.5239L62.5032 57.7796C63.091 58.3675 63.091 59.3206 62.5032 59.9085C61.9153 60.4964 60.9621 60.4964 60.3743 59.9085L23.1185 22.6528Z"
            />
            <path
              className="mark-animation2"
              d="M60.3743 20.5239C60.9621 19.936 61.9153 19.936 62.5032 20.5239C63.091 21.1118 63.091 22.0649 62.5032 22.6528L25.2474 59.9086C24.6596 60.4964 23.7064 60.4964 23.1185 59.9086C22.5307 59.3207 22.5307 58.3675 23.1185 57.7797L60.3743 20.5239Z"
            />
          </svg>
        )}

        <p>{emailStatus}</p>
      </div>
      <div className="lhs-form">
        <h1>Contact Form</h1>
        <form onSubmit={submit} className="form" action="">
          <label htmlFor="name">
            Name<span>*</span>:
          </label>
          <input required type="text" name="name" id="name" />
          <label htmlFor="email">
            Email<span>*</span>:
          </label>
          <input type="email" name="email" id="email" />
          <label htmlFor="phoneNum">Phone Number:</label>
          <input type="number" name="phoneNum" id="phoneNum" />
          <label htmlFor="budget">Budget:</label>
          <input type="number" name="budget" id="budget" />
          <label htmlFor="description">
            Description<span>*</span>:
          </label>
          <textarea required type="text" name="description" id="description" />
          <label htmlFor="services">
            Select Services<span>*</span>:
          </label>
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
