import {Link} from "react-router-dom";



export default function Navbar_main() {
    return(
        <>
        <header className='header'>
            <div className='header__container'>

            <h1 className="logo">
                <i className="pi-sun" style={{'fontSize': '1em'}}></i>
                <a href="/">Mind</a>
            </h1>
            {/*tu moze byc ikona */}
                 <nav>
                     <ul className="nav">
                         <li className="nav__element"><a href="/landing_why_how_section" className="nav__link">WHY?</a></li>
                         <li className="nav__element"><a href="/landing_why_how_section" className="nav__link">HOW?</a></li>
                      </ul>
                 </nav>
                <button className="btn_nav btn_signin/register"><Link to="/login"><i className="pi-sun" style={{'fontSize': '1em'}}></i>Register/ Sign In</Link></button>
            </div>
        </header>
</>
);
}
