import Checkbox from "./Components/Checkbox";
import Dropdown from "./Components/Dropdown";
import NameForm from "./Components/NameForm";
import Multiple from "./Components/Multiple";
import MyForm from "./Components/MyForm";
import Uncontrolled from "./Components/Uncontrolled";
import BigForm from "./Components/BigForm";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About/Index";
import Team from "./Components/Team";
import Company from "./Components/Company";
import Contact from "./Components/Contact";
import "./App.css";

function App() {
  return (
    <>
      {/* <BigForm />
      <Uncontrolled />
      <MyForm />
      <Multiple />
      <NameForm />
      <Dropdown />
      <Checkbox /> */}
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="team" element={<Team />} />
            <Route path="company" element={<Company />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
