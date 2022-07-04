import React from 'react';
import { useNavigate } from "react-router-dom";
import zyzz from '../../shared/images/zyzz.svg'
import './Home.css';


function Home(props) {
    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `/about`; 
    navigate(path);
  }
    return (
        <div className= "container">
            <div>
            <h2>WE GO JIM</h2>
            <img src={zyzz} width='400px'/>
            <button className="btn" onClick={routeChange}>Start WorkOut</button>
            </div>
        </div>
        
    );
}

export default Home;