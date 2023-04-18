import React from "react";
import Navbar from "./components/Navbar.jsx";
import './App.css';
import Banner from "./components/Banner.jsx";
import logements from "./assets/logements.json";
import Apartments from "./components/Apartments.jsx";

function App() {
  return (
    <div>
      <Navbar />
        <Banner />
        <Apartments />
    </div>
  );
}

export default App;
