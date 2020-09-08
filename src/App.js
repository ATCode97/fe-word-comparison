import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Comparison from "./Components/WordComparer";
import NavBar from "./Components/NavBar";
import ComparisonHistory from "./Components/ComparisonHistory";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Router>
          <Comparison path="/" />
          <ComparisonHistory path="/history" />
        </Router>
      </main>
    </div>
  );
}

export default App;
