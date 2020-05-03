import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Card1 from "./components/card1";
import Card2 from "./components/card2";
import Card3 from "./components/card3";
import Card4 from "./components/card4";
import Card5 from "./components/card5";
import Card6 from "./components/card6";

ReactDOM.render(
  <React.StrictMode>
    <App
      data={[
        <Card1 />,
        <Card1 />,
        <Card2 />,
        <Card3 />,
        <Card4 />,
        <Card5 />,
        <Card6 />,
      ]}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
