import React from 'react';
import zyzz from '../../shared/images/zyzz.svg';
import { Link } from 'react-router-dom';
import '../Home/Home.css';

export default function Character(props) {
    const {title,description,id} = props;

    return(
            <div className='col-4'>
                <div className='card-body'>
                    <h3 className='card-title'>{title}</h3>
                </div>
                <div className='card mb-3'>
                    <img
                        src={zyzz}
                        alt=""
                        className='card-img-top'
                    />
                    <div className='card-body'>
                        <Link to={`/notes/${id}`}>{description}</Link>
                    </div>
                </div>
            </div>
       
    )
}