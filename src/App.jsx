// import { Card } from "react-bootstrap";
import "./App.css";
import Card from "./modules/Card/Card";
import Navbar from "./modules/Shared Components/Navbar/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <div
        className="title my-5"
        style={{ width: "85%", margin: "auto", textAlign: "center" }}
      >
        <h1
          style={{ fontFamily: "Beiruti", fontWeight: "900", fontSize: "40px" }}
        >
          عقارات العدوه
        </h1>
      </div>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
