import 'primeicons/primeicons.css';
import { useNavigate } from 'react-router-dom'


export default function Navbar_main() {

    const navigate = useNavigate();

    //TO DO: click handlers to sections why and how
//onClick={() => scrollToSection(why)}
    // function handleScroll() {
    //     const scrollToSection = () => {
    //         const element = document.getElementsByClassName('how');
    //         if (element) {
    //             element.scrollIntoView({ behaviour: 'smooth'});
    //         }
    //     }
    // }

    return(
        <header className='header'>
            <div className='header__container'>

                <div className="logo">
                    <i className="pi pi-cloud" style={{'fontSize': '1em'}}></i>
                    <a href="/">Mind</a>
                </div>
                 <nav>
                     <ul className="nav">
                         <li className="nav__element" ><a href="#" className="nav__link">WHY?</a></li>
                         <li className="nav__element"><a href="#" className="nav__link">HOW?</a></li>
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

