import React from 'react';
import {useSelector} from "react-redux"
import { Link } from "react-router-dom";


export const ResultPage = () => {
    const {who,what,where,when} = useSelector (state => state)

    const dot = who && what && where && when ? "." : "";

   
    return (
        <div className="main-container">
            <div className="result-container">
                <h1>Your sentence is:</h1>
                <h2>{who} {what} {where} {when}{dot}</h2>
                <Link to="/">Start over</Link>
            </div>  
        </div>
    )
}
