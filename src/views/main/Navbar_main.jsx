import { Outlet, Link} from "react-router-dom";

export default function Navbar_main() {
    return(
<>
        <header className='header'>
            <div className='header__container'>
            <h1 className="logo"> <Link to="">Mind</Link></h1>
            {/*tu moze byc ikona */}
                 <nav>
                     <ul className="nav">
                         <li className="nav__element"><Link className="nav__link" to="/landing_why_how_section">WHY?</Link></li>
                         <li className="nav__element"><Link className="nav__link">HOW?</Link></li>
                      </ul>
                 </nav>
                <button className="btn_nav btn_signin/register">Register/ Sign In</button>
            </div>
        </header>
</>
);
}
