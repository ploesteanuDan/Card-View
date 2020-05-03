import React, { Component } from "react";
import "./card.css";
import { Srping } from "react-spring/renderprops";

class Card2 extends Component {
  state = {};
  render() {
    return (
      <div className="card2Container">
        <div className="card2">
          <p>Card 2</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            assumenda voluptatibus. Enim assumenda, facere magni asperiores
            neque hic nesciunt, labore voluptates, aliquid autem itaque
            molestiae doloremque perspiciatis nobis illum dignissimos? Deserunt
            quam beatae sunt sint qui aliquid perspiciatis laborum nihil.
          </p>
        </div>
      </div>
    );
  }
}

export default Card2;
