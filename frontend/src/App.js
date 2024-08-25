import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EnterCode from "./components/Pages/EnterCode/EnterCode";
import TopNavBar from "./components/Functions/TopNavBar/TopNavBar";


class App extends Component {

  render() {
    return (
      <Router>
        <TopNavBar/>
        <Routes>
          <Route path="/" element={<EnterCode/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
