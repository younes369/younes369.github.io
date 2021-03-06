import "./Card.css";
import { Slide } from "react-awesome-reveal";

function Card({ card, index }) {
  return (
    <Slide  direction={index % 2 !== 0 ? "right" : "left"} triggerOnce>
      <div className=" mg card" key={index}>
        <div>
          <div className="card-top card-flex">
            <img src={card["icon"]} alt="" srcset="" />
            <h2>{card["title"]}</h2>
          </div>
          <div className="card-middle card-flex">
            <h2>{card["phrase"]}</h2>
            <ul>
              {card["key-points"].map((element) => {
                return <li>{element}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="card-bottom card-flex">
          <h2>Contact Us</h2>
        </div>
      </div>
    </Slide>
  );
}

export default Card;
