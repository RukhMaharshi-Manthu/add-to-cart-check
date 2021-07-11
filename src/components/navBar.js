import React from "react";
import { Link } from "react-router-dom";

export function NavBar({ props }) {
  return (
    <header className="nav-bar">
      <div className="container">
        <ul className="flex menu">
          <li>
            <Link to="/">
              <h2>Home</h2>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <h2>About</h2>
            </Link>
          </li>
          <li>
            <Link to="/shop">
             <label>
                <h2>shop</h2>
              </label>
              
              
            </Link>
          </li>

          <li>
            <Link to="/addItem">
             
              <h2> add to cart</h2>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
