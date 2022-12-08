import Navbar from './Navbar_empty.jsx'
import image from "../styles/img/yay.jpg";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import supabase from "../services/supabase";
import { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { useNavigate } from "react-router-dom";

export default function Register() {

    const navigate = useNavigate();

const errorToast = useRef(null);

    const handleRegister = async (e) => {
        e.preventDefault();

        const [email, password, reenterpassword] = e.target.elements;
        if (password.value !== reenterpassword.value) {
            //throw new Error("Passwords must be the same");
            errorToast.current.show({severity: 'error', summary: 'Error', detail: 'Passwords must be the same.'});
        }

        let { data: {user, error}} = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
        });

        if (error) {
            errorToast.current.show({severity: 'error', summary: 'Error', detail: 'Error. Please try again.'})
        }

        navigate('/Dashboard')
    }


    return(
        <div className="register">
            <Navbar />
            <div className="container">

                <div className="img_section">
                    <img src={image} alt="hand" className="img-yay"/>
                </div>

                <div className="register-section">
                    <Toast ref={errorToast} />
                    <form onSubmit={(e) => handleRegister(e)} className="register-form">
                        <h1>Register </h1>

                        {/*    EMAIL*/}
                        <InputText placeholder="Email" />
                        <span className="ml-2"></span>
                        {/*    PASSWORD*/}
                        <Password placeholder="Password" toggleMask feedback={false}/>
                        <span className="ml-2"></span>
                        {/* RE-ENTERPASSWORD*/}
                        <Password placeholder="Re-enter password" toggleMask feedback={false}/>
                        <span className="ml-2"></span>
                        <span>
                      <Button label="Register" className="p-button-raised p-button-text p-button-plain"/>
                          <br />
                      <Button onClick={() => navigate('/Login')} label="Already have an account?" className="p-button-link p-button-raised" />
                  </span>
                    </form>
                </div>
            </div>
            </div>
    );
}