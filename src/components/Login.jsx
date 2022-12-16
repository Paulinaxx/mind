import image from '/src/styles/img/yay.jpg'
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button'
import Navbar from './Navbar_empty.jsx'
import supabase from "../services/supabase.js";
import { Toast } from 'primereact/toast';
import { useNavigate } from "react-router-dom";


export default function Login() {

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const [email, password] = e.target.elements;

        let {data: {user, error}} = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value
        });

        if (!error) {
            // errorToast.current.show({severity: 'error', summary: 'Error', detail: 'Error. Please try again.'})
            // return;
        }
        localStorage.setItem('userData', JSON.stringify(user));
        navigate('/Dashboard')
    }
    return(
        <div className="login">
            <Navbar />
            <div className="container">
              <div className="img_section">
            <img src={image} alt="hand" className="img-yay"/>
              </div>

             <div className="login-section">
              <form onSubmit={(e) => handleLogin(e)} className="login-form">
                  <h1>Sign in </h1>

              {/*    EMAIL*/}
                  <InputText placeholder="Email" />
                  <span className="ml-2"></span>
              {/*    PASSWORD*/}
                  <Password placeholder="Password" toggleMask feedback={false}/>
                  <span className="ml-2"></span>
                  <span>
                      <Button label="Sign In" className="p-button-raised p-button-text p-button-plain"/>
                          <br />
                      <Button onClick={() => navigate('/Register')} label="Register/Create account" className="p-button-link p-button-raised" />
                  </span>
              </form>
            </div>
           </div>
        </div>
 )
}
