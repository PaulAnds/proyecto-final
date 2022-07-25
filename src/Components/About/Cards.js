import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/Home.css';

export default function Character(props) {
    const {id,title,url,description} = props;

    const saved = () => { (id <= 3)?
        localStorage.setItem('day', id):
        localStorage.setItem('day', id-3)
    }

    return(
            <div className='col-4'>
                <div className='card-body'>
                    <h3 className='card-title'>{title}</h3>
                </div>
                <div className='card mb-3'>
                    <img
                        src={url}
                        alt=""
                        className='card-img-top'
                    />
                    <div className='card-body'>
                        <Link to={`/Workouts/${id}`} onClick={saved}>{description}</Link>
                    </div>
                </div>
            </div>
       
    )
}