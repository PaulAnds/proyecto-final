import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Exercises(props) {
    const {title, url} = props;
    const [inputText,setInputText] = useState('');
    
    const handleOnChange = (e) =>{
        const text = e.target.value;
        setInputText(text);
    }

    const saveData = () => {
        localStorage.setItem(title, inputText);
    }
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        fontSize: "16px",
        color: 'blue'
      };
      const Text = {
        fontSize: "24px",
        fontWeight: "bold",
      };
    return(
        <div>
            <div className="d-inline p-2" style={Text} >{title}</div>
            <div className="d-inline p-2">
                <Link to={`/Workouts/${localStorage.getItem('day')}`} style={linkStyle}>Go back</Link></div>
            <h5>4 (sets) x 8~12 (reps)</h5>
                <img 
                    src = {url}
                    width = '350rem'
                    alt = {title}
                />
                <br></br>
                <br></br>
                <h4>{(localStorage.getItem(title) != null)? 'Last time: ' +localStorage.getItem(title) + ' lb': 'First timer!'}</h4>
                <form>
                    <div className="form-group">
                        <input 
                            id= {title} 
                            onChange = {handleOnChange}
                            placeholder="Weight in lb"
                        />
                    </div>
                    <br></br>
                    <button type="number" onClick={saveData}>Submit</button>
                </form>
        </div>
    )
}