import 'primeicons/primeicons.css';

export default function Footer() {
    return(

        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__info">
                    <a href="src/views/Footer.jsx#" className="logo">MIND.</a>
                    <span className="footer__copy">© 2022 MIND, All Rights Reserved</span>
                </div>
                <div className="footer__icons">
                    <i className="pi-facebook" style={{'fontSize': '1em'}}></i>
                    <i className="pi-twitter" style={{'fontSize': '1em'}}></i>
                    <i className="pi-youtube" style={{'fontSize': '1em'}}></i>
                    <i className="pi-instagram" style={{'fontSize': '1em'}}></i>
                </div>
            </div>
        </footer>
    );
}