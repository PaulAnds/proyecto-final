import React, {useState} from 'react';
import Cards from './Cards';
import list from './List';

function About(props) {


    const ListTag = () => list.map(lists => (
        <Cards
            key={lists.id}
            title={lists.title}
            description={lists.description}
        />
    ))

    return (
        <div>
             <ListTag />
        </div>
    );
}

export default About;