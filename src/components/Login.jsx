import image from '/src/styles/img/yay.jpg'
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button'


export default function Login() {
    return(

        <div className="login-container">

              <div className="img_section">
            <img src={image} alt="hand" className="img-yay"/>
              </div>

              <form className="login-form">
              {/*    EMAIL*/}
                  <InputText placeholder="Email" />
                  <span className="ml-2"></span>
              {/*    PASSWORD*/}
                  <Password placeholder="Password" toggleMask feedback={false}/>
                  <span className="ml-2"></span>
                  <span>

                      <Button label="Sign In" className="p-button-raised p-button-text p-button-plain"/>
                      <br />
                      <i className="pi pi-arrow-right"></i>
                      <Button label="Register/Create account" className="p-button-link p-button-raised"/>
                  </span>
              </form>
           </div>
 )
}