
import React, {Component} from "react";
import {createRoot} from "react-dom/client";
import {
    BrowserRouter as Router,
    Routes,
    Route} from 'react-router-dom';

// TO ADD: DASHBOARD AFTER LOGIn IN
//header, footer -MAJA BYC WIDOCZNE ZAWSZE

import Main_page from "./views/Main_page.jsx";
// import Navbar_main from "./views/main/Navbar_main.jsx";
// import Main_welcome_section from "./views/main/Main_welcome_section.jsx";
// import Main_why_how_section from "./views/main/Main_why_how_section.jsx";
// import Main_CTA from "./views/main/Main_CTA.jsx";
// import Footer from "./views/Footer.jsx";

import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

//DASHBOARD AFTER LOG IN
import Dashboard from "./components/Dashboard.jsx"
import Footer from "./views/Footer.jsx";
// import Navbar_logout from "./components/dashboard/Navbar_logout.jsx"
// import Welcome from "./components/dashboard/Welcome.jsx"
// import Add_subscription from "./components/dashboard/Add_subscription.jsx"
// import Your_subscriptions from "./components/dashboard/Your_subscriptions.jsx"


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


