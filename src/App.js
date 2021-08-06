import React from "react";
import logo from "./logo.png";
import "./App.css";
import Section from "./components/Section";
import data from "./data.json";

const App = () => {
  return (
    <>
      <h1>
        {" "}
        <img src={logo} className="App-logo" alt="logo" />
      </h1>
      <div className="container">
        {data.map((elem) => {
          const name = elem.category;
          const movies = elem.images;
          return <Section category={name} images={movies} />;
        })}
      </div>
    </>
  );
};

export default App;
