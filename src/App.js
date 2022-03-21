import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import apiKey from "./config";

// App components
import Nav from "./components/Nav";

// main container component
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/sunsets" />
      </Routes>
    </Router>
  );
}

export default App;
