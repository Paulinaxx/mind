import { Outlet } from "react-router-dom";
// import 'primeicons/primeicons.css';

import Navbar_logout from "./dashboard/Navbar_logout.jsx";
import Welcome from "./dashboard/Welcome.jsx";
import AddSubscription from "./dashboard/Add_subscription.jsx";
import YourSubscriptions from "./dashboard/Your_subscriptions.jsx";



export default function Main_Dashboard() {

    return(
        <div>
            <Navbar_logout />
            <Welcome />
            <AddSubscription />
            <YourSubscriptions />
            <Outlet />
        </div>
    );
}