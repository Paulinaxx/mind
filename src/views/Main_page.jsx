import { Outlet } from "react-router-dom";


import Navbar_main from "./main/Navbar_main.jsx";
import Main_welcome_section from "./main/Main_welcome_section.jsx";
import Main_why_how_section from "./main/Main_why_how_section.jsx";
import Main_CTA from "./main/Main_CTA.jsx";
import Footer from "./Footer.jsx";


export default function Main_page() {

    return(
        <div>
             <Navbar_main />
            <Outlet />
             <Main_welcome_section />
            <Outlet />
             <Main_why_how_section />
            <Outlet />
             <Main_CTA />
            <Outlet />
            <Footer />
            <Outlet />
        </div>
    );
}