import React, {useState} from "react";
import { InputText } from 'primereact/inputtext';
import 'primeicons/primeicons.css';

export default function Add_subscription() {

        const [name, setName] = useState("");
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [dates, setDates] = useState("");
        const [sum, setSum] = useState("");
// const Form = () => {
    //     const [form, setForm] = useState({ name: "", username: "", password: "", dates: "", sum: ""});
    //
    //     const handleChange = (e) => {
    //         const {name, value} = e.target;
    //         setForm(prevState => {
    //             return {
    //                 ...prevState,
    //             [name]: value
    //     }
    //   });
    // }

        return (
            <div className="container">
            <div className="add_sub">
                <h1>Now, it's time for add some subs </h1>

            <div className="form_content">
            <form>
                <input type="text"
                       placeholder="Name of the platform"
                       value={name}
                       onChange={e => setName(e.target.value)}/>

                <input type="text"
                       placeholder="Username for the platform"
                       value={username}
                       onChange={e => setUsername(e.target.value)}/>

                <input type="text"
                       placeholder="Password for the platform"
                       value={password}
                       onChange={e => setPassword(e.target.value)}/>

                <input type="text"
                       placeholder="When subscription expires?"
                       value={dates}
                       onChange={e => setDates(e.target.value)}/>

                <input type="number"
                       placeholder="How much do you pay?"
                       value={sum}
                       onChange={e => setSum(e.target.value)}/>
            </form>
                <button type="add" className="btn-add-sub">+</button>
            </div>
             </div>
              </div>
        )
}
