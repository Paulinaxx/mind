
import Profile from './Profile.jsx'

export default function Navbar_logout() {
    return(
            <header className='header'>
                <div className='header__container'>

                    <h1 className="logo">
                        <i className="pi-sun" style={{'fontSize': '1em'}}></i>
                        <a href="/">Mind</a>
                    </h1>

                    <div className="navbar-profile">
                        <Profile />
                    </div>
                    {/*tu moze byc ikona */}
                    {/*<nav>*/}
                    {/*    /!*<ul className="nav">*!/*/}
                    {/*    /!*    <li className="nav__element"><a href="/landing_why_how_section" className="nav__link">WHY?</a></li>*!/*/}
                    {/*    /!*    <li className="nav__element"><a href="/landing_why_how_section" className="nav__link">HOW?</a></li>*!/*/}
                    {/*    /!*</ul>*!/*/}
                    {/*</nav>*/}
                    {/*<button className="btn_nav btn_logout">*/}
                    {/*    /!*<Link to="/">Logout</Link>*!/*/}
                    {/*    <i className="pi-arrow-up-right" style={{'fontSize': '1em'}}></i>*/}
                    {/*</button>*/}
                </div>
            </header>

    );
}