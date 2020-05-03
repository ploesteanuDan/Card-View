import React, { Component } from "react";
import Card1 from "./components/card1";
import Card2 from "./components/card2";
import { Transition, animated } from "react-spring/renderprops";
import "./App.css";

class App extends Component {
  state = {
    counter: 0,
  };
  toggle = (e) =>
    this.setState({
      counter: this.state.counter + 1,
    });
  render() {
    console.log(this.state.counter);
    return (
      <div className="App">
        <button className="nextBtn" onClick={this.toggle}>
          Next Card
        </button>

        <Transition
          className="transCard2"
          native
          items={this.state.counter}
          from={{ transform: "translate(-2000px, -1000px)" }}
          enter={{ transform: "translate(0px, 0px)" }}
          leave={{ transform: "translate(2000px, -100px)" }}
        >
          {(show) =>
            show &&
            ((props) => (
              <animated.div style={props}>
                {this.props.data[this.state.counter]}
              </animated.div>
            ))
          }
        </Transition>
      </div>
    );
  }
}

export default App;
