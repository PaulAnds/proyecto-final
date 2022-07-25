import React from 'react';

export default function Explanation(props) {
    const {title, url} = props;

    return(
        <div>
            <h4>{title}</h4>
                <img 
                    src = {url}
                    width = '300rem'
                    alt = {title}
                />
            <h3>{(localStorage.getItem(title) != null)?localStorage.getItem(title) + ' lb':'First Timer!' }</h3>
        </div>
    )
}