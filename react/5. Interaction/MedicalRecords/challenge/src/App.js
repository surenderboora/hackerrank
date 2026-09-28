import React, { useState } from "react";
import "./App.css";
import "h8k-components";
import Search from "./components/Search";
import Records from "./components/Records";


const title = "Patient Medical Records";

const App = () => {
  const [record, setRecord] = useState(null);
  const [id, setId] = useState("0");

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="content">
        <Search id={id} setId={setId} setRecord={setRecord} />
        <Records record={record} setRecord={setRecord}/>
      </div>
    </div>
  );
};

export default App;
