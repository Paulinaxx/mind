import 'primeicons/primeicons.css';
import {Outlet} from "react-router-dom";

export default function Footer() {
    return(
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__info">
                    <a href="src/views/Footer.jsx#" className="logo">MIND.</a>
                    <span className="footer__copy">© 2022 MIND, All Rights Reserved</span>
                </div>
                <div className="footer__icons">
                    <a href="/"><i className="pi pi-facebook" style={{'fontSize': '1em'}}></i></a>
                    <a href="/"><i className="pi pi-twitter" style={{'fontSize': '1em'}}></i></a>
                    <a href="/"><i className="pi pi-youtube" style={{'fontSize': '1em'}}></i></a>
                    <a href="/"><i className="pi pi-instagram" style={{'fontSize': '1em'}}></i></a>
                </div>
            </div>
        </footer>
    );
}