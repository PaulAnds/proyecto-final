import React from 'react';
import zyzz from '../../shared/images/zyzz.svg'

export default function Character(props) {
    const {title, image,description} = props;

    return(
        <div className='row'>
            <div className='col-3'>
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
                        <h3 className='card-title'>{description}</h3>
                    </div>
                </div>
            </div>
        </div>
       
    )
}