import React from "react";
import "./App.css";
import "h8k-components";
import Search from "./components/Search";
import Records from "./components/Records";

const title = "Patient Medical Records";

const App = () => {
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="content">
        <Search />
        <Records />
      </div>
    </div>
  );
};

export default App;
