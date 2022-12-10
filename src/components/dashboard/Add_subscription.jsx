import React, {useState} from "react";
import {useEffect} from "react";
import 'primeicons/primeicons.css';
import Your_subscriptions from "./Your_subscriptions.jsx";



const initialValues = {
    name: "",
    username: "",
    password: "",
    dates: "",
    sum: "",
 };

export default function Add_subscription() {


    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [dates, setDates] = useState("");
    const [sum, setSum] = useState("");

    const [list, setList] = useState([]); //list of subscriptions

    const [inputs, setInputs] = useState(initialValues);

    const handleInputChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const handleAddSub = (e) => {
        e.preventDefault();

        console.log(inputs)
    }

    //upgrade list of subs?



    return(
            <div className="container">
            <div className="add_sub">
                <h1>Now, it's time for add some subs </h1>

            <div className="form_content">

            <form className="form-box">
                <input type="text"
                       name="name"
                       placeholder="Name of the platform"
                       value={inputs.name}
                       onChange={handleInputChange}/>

                <input type="text"
                       name="username"
                       placeholder="Username for the platform"
                       value={inputs.username}
                       onChange={handleInputChange}/>

                <input type="text"
                       name="password"
                       placeholder="Password for the platform"
                       value={inputs.password}
                       onChange={handleInputChange}/>

                <input type="text"
                       name="dates"
                       placeholder="When subscription expires?"
                       value={inputs.dates}
                       onChange={handleInputChange}/>

                <input type="number"
                       name="sum"
                       placeholder="How much do you pay?"
                       value={inputs.sum}
                       onChange={handleInputChange}/>

            </form>

                <button type="submit"
                        className="btn-add-sub"
                         onClick={handleAddSub}                //dodaj elem do listy/ tabeli
                >+</button>
            </div>
         </div>
                <h1></h1>
    </div>
    )
}

