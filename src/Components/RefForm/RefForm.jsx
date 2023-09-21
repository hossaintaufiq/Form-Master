import { useEffect } from "react";
import { useRef } from "react";


const RefForm = () => {

    const nameRef= useRef(null);
    const emailRef=useRef(null);
    const numberRef=useRef(null);

    useEffect( ()=>{
        nameRef.current.focus();
    }
        ,[])

    
    const HandleSubmit = e=> {
        e.preventDefault();
        // console.log(e.target.name.value);
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(numberRef.current.value);

    }


    return (
        <div>
            <form onSubmit={HandleSubmit} >

                <input ref={nameRef} type="text" name="name" required />
                <br />
                <input ref={emailRef} type="email" name="email" id="" />
                <br />
                <input ref={numberRef}  type="number" name="number" />
                <br />
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default RefForm;