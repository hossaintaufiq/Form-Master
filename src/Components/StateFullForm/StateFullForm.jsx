import { useState } from "react";

const StateFullForm = () => {
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [number,setNumber]= useState('');


    const handleSubmit = e => {
        e.preventDefault();
        console.log(name,email,number);
    }

    const HandleNameChange= e =>{
        setName(e.target.value);
    }

    const HandleEmailChange = e => {
        setEmail(e.target.value);
    }
    const HandleNumberChange=e=>{
        setNumber(e.target.value);
    }

    return (
        <div>

            <form onSubmit={handleSubmit} >

            <input onChange={HandleNameChange} type="text"  name="name" required/>
            <br />
            <input onChange={HandleEmailChange} type="email" name="email" id="" />
            <br />
            <input onChange={HandleNumberChange} type="number" name="number" />
            <br />
            <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default StateFullForm;