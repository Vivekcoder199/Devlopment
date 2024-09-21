import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Registration from "./components/Registration";


function App() {
  return(
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
  
              <Link to="/" class="login-button">Login</Link>
            </li>
            <li>
              <Link to="/registration" class="registration-button">Registration</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact="true" path="/" element={<Login />} ></Route>

          <Route path="/registration" element={<Registration />}></Route>

        </Routes>

      </div>

    </Router>
  );
}

export default App;
