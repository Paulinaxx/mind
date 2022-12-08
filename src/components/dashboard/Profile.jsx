import 'primeicons/primeicons.css';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import supabase from "../../services/supabase.js";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Profile() {

    const navigate = useNavigate();

    const [ avatarText, setAvatarText ] = useState(null);

    useEffect(() => {
        setAvatarText(JSON.parse(localStorage.getItem('userData')).email.slice(0,2));
    }, []);

    const handleLogout = async () => {
        let { error } = await supabase.auth.signOut()

        if (!error) {
            localStorage.removeItem('userData');
            navigate('/Login')
        }

    }

    return(
        <div className="profile__container">
            { avatarText && <Avatar className="profile" label={avatarText.toUpperCase()} size="small" shape="circle" /> }
            <Button onClick={handleLogout} className="p-button-link"> Sign out
            <i className="pi pi-sign-out"></i>
            </Button>
        </div>
    )
}
//onClick logout to mainpage