import React, {useState} from "react";

//child 
const Callback = ({getColor}) =>{
    const [activecolor, setActiveColor] = useState(null)

    const handleChange = (e) => {
        const {value} = e.target;
        setActiveColor(value);
        getColor(value)
    };
    return(
        <input
        type="text"
        id="input"
        aria-label="input"
        onChange={handleChange}
        value={activecolor}
        />

    )
}
export default Callback;