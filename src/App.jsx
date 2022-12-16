
import React, {Component} from "react";
import {createRoot} from "react-dom/client";
import {
    BrowserRouter as Router,
    Routes,
    Route} from 'react-router-dom';

// TO ADD: DASHBOARD AFTER LOGIn IN
//header, footer -MAJA BYC WIDOCZNE ZAWSZE

import Main_page from "./views/Main_page.jsx";

import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

//DASHBOARD AFTER LOG IN
import Dashboard from "./components/Dashboard.jsx"
import Footer from "./views/Footer.jsx";



export default function App() {
  return(
      <Router>
          <Routes>
              <Route path="/" element={<Main_page />}>
              </Route>

              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>

              <Route path="/dashboard" element={<Dashboard />}>
              </Route>
          </Routes>
          <Footer />
      </Router>
  );
}


