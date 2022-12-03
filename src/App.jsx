
import React, {Component} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter as Router, Routes, Route, Link, NavLink, Outlet, BrowserRouter} from 'react-router-dom';



// TO ADD: DASHBOARD AFTER LOGIn IN
//header, footer -MAJA BYC WIDOCZNE ZAWSZE

import Main_page from "./views/Main_page.jsx";
import Navbar_main from "./views/main/Navbar_main.jsx";
import Main_welcome_section from "./views/main/Main_welcome_section.jsx";
import Main_why_how_section from "./views/main/Main_why_how_section.jsx";
import Main_CTA from "./views/main/Main_CTA.jsx";
import Footer from "./views/Footer.jsx";

import Login from "./views/Login.jsx";
import Register from "./views/Register.jsx";



export default function App() {
  return(
      <Router>
          <Routes>
              <Route path="/" element={<Main_page />}>
              <Route path="/navbar_main" element={<Navbar_main />}/>
              <Route path="/landing_welcome_section" element={<Main_welcome_section />}/>
              <Route path="/landing_why_how_section" element={<Main_why_how_section />}/>
              <Route path="/landing_CTA" element={<Main_CTA />}/>
              <Route path="/footer" element={<Footer />}/>
              </Route>

              <Route path="/Login" element={<Login />}/>
              <Route path="/Register" element={<Register />}/>

          </Routes>
      </Router>
  );
}


