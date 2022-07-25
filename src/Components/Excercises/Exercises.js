import React, {useState} from 'react';

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

    return(
        <div>
            <h4>{title}</h4>
                <img 
                    src = {url}
                    width = '350rem'
                    alt = {title}
                />
                <form>
                    <div className="form-group">
                        <input 
                            id="chest" 
                            onChange = {handleOnChange}
                            placeholder="Reps"
                        />
                    </div>
                    
                <button type="number" onClick={saveData}>Submit</button>
                </form>
        </div>
    )
}