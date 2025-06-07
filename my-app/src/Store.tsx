import React from "react";
import { useNavigate } from 'react-router-dom';
import { asfd } from "./data";
const Store = () => {
    const navigate = useNavigate();
    return(
        <div>
            <button onClick={()=>navigate('/')}>home</button>
            <h2>{asfd}</h2>
        </div>
    )
}

export default Store