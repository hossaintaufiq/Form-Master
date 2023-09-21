import { useState } from "react"

const useInputState = (defaultValue='') =>{
    const [value, setValue]=useState(defaultValue);

    const onChange = e =>{
        setValue(e.target.value);

    }


    return {value,onChange};

}

export default useInputState;