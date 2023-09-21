import useInputState from "../Hooks/useInputState";


const HookForm = () => {

    // const [name,handleChange]=useInputState('Hossain Ahmmed taufiq ');
    // const [email,handleEmailChange]=useInputState('');
    // const [number,handleNumberChange]=useInputState(' ');

    const emailChange =useInputState('');
    const numberChange =useInputState('');
    const nameChange= useInputState('');



    const HandleSubmit=e=>{
        e.preventDefault();
        console.log(' form data : ' + emailChange.value,numberChange.value,nameChange.value);

    }

    return (
        <div>

            <form onSubmit={HandleSubmit} >

                {/* <input value={name} onChange={handleChange} type="text" name="name" required /> */}
                <br />
                {/* <input value={email} onChange={handleEmailChange} type="email" name="email" id="" />
                <br />
                <input value={number} onChange={handleNumberChange} type="number" name="number" /> */}
                <br />
                <input {...nameChange} type="text" name="name" required />
                <br />
                <input {...emailChange} type="email" name="email" id="" />
                <br />
                <input {...numberChange} type="number" name="number" id="" />
                <br />

                <input type="submit" value="Submit" />

            </form>

        </div>
    );
};

export default HookForm;