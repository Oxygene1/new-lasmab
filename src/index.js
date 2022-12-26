import React from "react";
import ReactDOM from "react-dom/client";
import "../src/components/card/card.css";
import "./index.css";
import Home from "./screens/home/Home";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./components/header/header.css";
import Header from "./components/header/Header";
import Values from "./screens/values/Values";
// import News from "./screens/news/News";
// import Board from "./screens/board/Board";
// import Contact from "./screens/contact/Contact";
// import OurSchools from "./screens/ourSchools/OurSchools";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <Home />
      <Values />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
