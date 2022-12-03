
import React, {Component} from "react";
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

//DASHBOARD AFTER LOG IN
import Dashboard from "./components/Dashboard.jsx"
import Navbar_logout from "./components/dashboard/Navbar_logout.jsx"
import Welcome from "./components/dashboard/Welcome.jsx"
import Add_subscription from "./components/dashboard/Add_subscription.jsx"
import Your_subscriptions from "./components/dashboard/Your_subscriptions.jsx"



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

              {/*<Route path="/dashboard" />*/}
              <Route path="dashboard" element={<Dashboard />}>
              <Route path="/navbar_logout" element={<Navbar_logout />}/>
              <Route path="/welcome" element={<Welcome />}/>
              <Route path="/Add_subscription" element={<Add_subscription />}/>
              <Route path="/Your_subscriptions" element={<Your_subscriptions />}/>
              </Route>
          </Routes>
      </Router>
  );
}


