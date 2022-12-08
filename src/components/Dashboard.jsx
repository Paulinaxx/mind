import { Outlet } from "react-router-dom";
// import 'primeicons/primeicons.css';

import Navbar_logout from "./dashboard/Navbar_logout.jsx";
import Welcome from "./dashboard/Welcome.jsx";
import AddSubscription from "./dashboard/Add_subscription.jsx";
import YourSubscriptions from "./dashboard/Your_subscriptions.jsx";
import supabase from "../services/supabase.js";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


export default function Main_Dashboard() {

    const [isLogged, setIsLogged] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const isUserLogged = async() => {
            const { data: { user } } = await supabase.auth.getUser();

            if (!user) {
                navigate('/Login');
            }
            setIsLogged(true);
        }

        isUserLogged();

    }, []);

    return(
        <>
            {
                isLogged &&
                (<div>
                    <Navbar_logout />
                    <Welcome />
                    <AddSubscription />
                    <YourSubscriptions />
                    <Outlet />
                    </div>)
            }
        </>
    );
}