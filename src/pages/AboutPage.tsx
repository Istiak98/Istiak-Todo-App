import React from "react";
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
           <div className="center">
           <h4 className="center">Istiak Todo List -- About Us</h4>
            <p className="center">This is simple add and delete to do items app </p>
            <button className="btn cyan"  onClick={() => history.push('/')}>Back to Home</button>
           </div>
        </>
    )
}