import Profile from './Profile.jsx'
import 'primeicons/primeicons.css';

//TO DO: profile => przycisk do logout => onClick logout to mainpage
//click handler

 export default function Navbar_logout() {
     return(
             <header className='header'>
                 <div className='header__container'>

                     <h1 className="logo">
                         <i className="pi pi-cloud" style={{'fontSize': '1em'}}></i>
                         <a href="/">Mind</a>
                     </h1>
                    {/*tu moze byc ikona */}
                    <nav>
                        <div className="navbar-profile">
                            <Profile />
                        </div>
                    </nav>
                 </div>
             </header>
     );
 }

 //<ul className="nav">
//                         <li className="nav__element"><a href="/landing_why_how_section" className="nav__link">WHY?</a></li>
//                         <li className="nav__element"><a href="/landing_why_how_section" className="nav__link">HOW?</a></li>
//                     </ul>