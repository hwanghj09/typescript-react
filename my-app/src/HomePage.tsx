import React from "react";
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
    const navigate = useNavigate();
    return(
        <div>
            <h1>asf</h1>
        <button onClick={() => navigate('/store')}>ds</button>
        </div>
    )
}

export default HomePage