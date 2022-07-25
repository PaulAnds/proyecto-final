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
            <h3>4 x {(localStorage.getItem(title) != null)? localStorage.getItem(title):0 }</h3>
            <h3>-------------</h3>
        </div>
    )
}