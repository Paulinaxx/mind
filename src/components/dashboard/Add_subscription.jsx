import React, {useState} from "react";
import {useEffect} from "react";
import 'primeicons/primeicons.css';
import Your_subscriptions from "./Your_subscriptions.jsx";

export default function Add_subscription() {

    const [list, setList] = useState([]); //list of subscriptions

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [dates, setDates] = useState("");
    const [sum, setSum] = useState("");


    const [inputs, setInputs] = useState({})


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    //dodawanie elem do tablicy z subami??
    const handleAddSub = (e) =>{
        e.preventDefault();
        console.log(inputs);                                                //tutaj dodac elem do listy??
        }


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // if (!name || !username || !password || !dates || !sum) {
    //     //     throw new Error("fill data!")
    //     // } else {
    //     //     setList([...list, inputs]);
    //     // }
    // }

    return(
            <div className="container">
            <div className="add_sub">
                <h1>Now, it's time for add some subs </h1>

            <div className="form_content">

            <form onSubmit={handleAddSub} className="form-box">
                <input type="text"
                       name="name"
                       placeholder="Name of the platform"
                       value={inputs.name || ""}
                       onChange={handleChange}/>

                <input type="text"
                       name="username"
                       placeholder="Username for the platform"
                       value={inputs.username || ""}
                       onChange={handleChange}/>

                <input type="text"
                       name="password"
                       placeholder="Password for the platform"
                       value={inputs.password || ""}
                       onChange={handleChange}/>

                <input type="text"
                       name="dates"
                       placeholder="When subscription expires?"
                       value={inputs.dates || ""}
                       onChange={handleChange}/>

                <input type="number"
                       name="sum"
                       placeholder="How much do you pay?"
                       value={inputs.sum || ""}
                       onChange={handleChange}/>

            </form>

                <button type="button"
                        className="btn-add-sub"
                        onClick={handleAddSub}
                >+</button>
            </div>
         </div>
                {/*<h1>Your subscriptions:</h1>*/}

    </div>
    )
}

