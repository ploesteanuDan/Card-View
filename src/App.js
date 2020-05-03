import React, { Component } from "react";
import Card1 from "./components/card1";
import Card2 from "./components/card2";
import { Transition, animated } from "react-spring/renderprops";
import "./App.css";

class App extends Component {
  state = {
    showCard2: false,
  };
  toggle = (e) => this.setState({ showCard2: !this.state.showCard2 });
  render() {
    return (
      <div className="App">
        <button className="nextBtn" onClick={this.toggle}>
          Next Card
        </button>
        <Card1 toggle={this.toggle} />

        <Transition
          native
          items={this.state.showCard2}
          from={{ transform: "translate(2000px, -2000px)" }}
          enter={{ transform: "translate(0px, 0px)" }}
          leave={{ transform: "translate(2000px, -2000px)" }}
        >
          {(show) =>
            show &&
            ((props) => (
              <animated.div style={props}>
                <Card2 />
              </animated.div>
            ))
          }
        </Transition>
      </div>
    );
  }
}

export default App;
