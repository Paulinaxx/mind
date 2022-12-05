import 'primeicons/primeicons.css';
import {Link} from "react-router-dom";

import {useNavigate} from 'react-router-dom'

export default function Navbar_main() {
    const navigate = useNavigate();

    return(
        <header className='header'>
            <div className='header__container'>

            <div className="logo">
                <i className="pi pi-cloud" style={{'fontSize': '1em'}}></i>
                <a href="/">Mind</a>
            </div>
                 <nav>
                     <ul className="nav">
                         <li className="nav__element"><a href="/landing_why_how_section" className="nav__link">WHY?</a></li>
                         <li className="nav__element"><a href="/landing_why_how_section" className="nav__link">HOW?</a></li>
                      </ul>
                 </nav>
                <button className="btn_nav btn_signin/register"
                        onClick={() => navigate("/login")}>
                    <i className="pi pi-arrow-right"></i>
                    SignIn / Register </button>
            </div>
        </header>
);
}
//const navigate = useNavigate();
//button could be <button className="btn_nav btn_signin/register" onClick={() => navigate("/login")}> SignIn/Register </button>
// <button className="btn_nav btn_signin/register"><Link to="/login"><i className="pi-sun" style={{'fontSize': '1em'}}></i>Register/ Sign In</Link></button>