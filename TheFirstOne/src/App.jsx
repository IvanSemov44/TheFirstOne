import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About/Index";
import Team from "./Components/Team";
import Company from "./Components/Company";
import Contact from "./Components/Contact";
import Navigator from "./Components/Navigator";
import BigForm from "./Components/BigForm";
import "./App.css";
import CardList from "./Components/CardList";
import ShopCart from "./Components/ShopCart";

function App() {
  return (
    <>
      <Router>
        <Navigator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="team" element={<Team />} />
            <Route path="company" element={<Company />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/bigform" element={<BigForm />} />
          <Route path="/cards" element={<CardList />} />
          <Route path="shopcart" element={<ShopCart/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
