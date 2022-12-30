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
import Values from "./screens/vlues/Values";
import MainSections from "./layouts/mainSections/MainSections";
import BoardMembers from "./layouts/boardMembers/BoardMembers";
import Questions from "./layouts/questions/Questions";
import Footer from "./components/footer/Footer";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <Home />
      <Values />
      <MainSections/>
      <BoardMembers/>
      <Questions />
      <Footer/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
