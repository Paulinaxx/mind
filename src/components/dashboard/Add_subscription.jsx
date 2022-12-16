import React, { useState, useEffect } from "react";
import 'primeicons/primeicons.css';
import supabase from "/src/services/supabase.js";

// TO DO
// edit button

export default function Add_subscription() {


    const [list, setList] = useState([]); //list of subscriptions

    const [inputs, setInputs] = useState({
        name: "",
        username: "",
        password: "",
        dates: "",
        sum: "",
    });
    // const [editId, setEditId] = useState(0);

    const [formErrorMsg, setFormErrorMsg] = useState(null)

    const handleInputChange = (e) => {
        e.preventDefault();

        const {name, value} = e.target;
        setInputs((prev) => {
            return {...prev, [name]: value}
        });


    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const subscriptions = JSON.parse(localStorage.getItem('list') || "[]")
        // if(editId) {
        //     const editSub = list.find((i) => i.id === editId);  //edit button later
        //
        //     const updatedList = list.map((to) =>
        //         to.id === editSub.id
        //             ? (to = {id: to.id, list})
        //             : {id: to.id, inputs: to.inputs }
        //     );
        //     setList(updatedList);
        // setEditId(0)
        // setInputs("");
        // return;
        // }

        const { name, username, password, dates, sum } = inputs;
        setList([
            ...list,
            {
                name, username, password, dates, sum,
                id: Math.floor(Math.random() * 10000)
            },
        ])
        // if (!name || !username || !password || !dates || !sum) { //not working?
        //     setFormErrorMsg('Please fill in ALL the fields')
        //     return
        // }
        localStorage.setItem('inputs', JSON.stringify(list))
    }


    const handleDelete = (id) => {
          //e.preventDefault();
        const delSub = list.filter((to) => to.id !== id) //jesli id pasuje to usuwa
        setList([...delSub]);
    };

    // const handleEdit = (id) => {   //po click edytuje w inputs -> po + dodaje zedytowany do listy
    //
    //     const editSub = list.find((i) => i.id === id);
    //     setInputs(editSub.inputs);
    //     setEditId(id);
    //     //iterates through every list elem and fins elem with same id-> zwraca caly obiekt z id
    // };

    return (
        <div className="container">
            <div className="add_sub">
                <h1>Now, it's time for add some subs </h1>

                <div className="form_content">

                    <form onSubmit={handleSubmit} className="form-box">
                        <input type="text"
                               name="name"
                               placeholder="Name of the platform"
                               value={inputs.name}
                               onChange={handleInputChange}
                        />

                        <input type="text"
                               name="username"
                               placeholder="Username for the platform"
                               value={inputs.username}
                               onChange={handleInputChange}
                        />

                        <input type="text"
                               name="password"
                               placeholder="Password for the platform"
                               value={inputs.password}
                               onChange={handleInputChange}
                        />

                        <input type="text"
                               name="dates"
                               placeholder="When subscription expires?"
                               value={inputs.dates}
                               onChange={handleInputChange}
                        />

                        <input type="text"
                               name="sum"
                               placeholder="How much do you pay?"
                               value={inputs.sum}
                               onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn-add-sub">+
                        </button>
                        {/*{formErrorMsg && <p className='error'>{formErrorMsg} </p>}*/}
                    </form>
                </div>
            </div>

            <h1>Your subscriptions</h1>
/
                <div className="your_subs">
                    <ul className="all_subs">
                        {list.map((inputs) => (
                            // AND TO DO: button - edit
                            <li className="single-sub" key={inputs.id}>

                                {/*//should change to table*/}
                                <span className="subText">{inputs.name}</span>
                                <span className="subText">{inputs.username} </span>
                                <span className="subText">{inputs.password}</span>
                                <span className="subText">{inputs.dates}</span>
                                <span className="subText">{inputs.sum}</span>

                                {/*<button className="btn-sub"><i className="pi pi-file-edit"></i></button>*/}
                                <button onClick={() => handleDelete(inputs.id)} className="btn-sub"><i
                                    className="pi pi-times"></i></button>
                            </li>
                        ))}
                    </ul>
                </div>
        </div>
    )
}
//- {inputs.username} - {inputs.password} - {inputs.dates} - {inputs.sum}

