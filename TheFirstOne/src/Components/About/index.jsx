import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <nav>
        <ul>
          <li>
            <Link to="team">Our Team</Link>
          </li>
          <li>
            <Link to="company">Company</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
};

export default About;
