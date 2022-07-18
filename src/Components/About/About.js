import React from 'react';
import Cards from './Cards';
import list from './List';
import './About.css'

function About() {


    const ListTag = () => list.map(lists => (
        <Cards
            key={lists.id}
            id={lists.id}
            title={lists.title}
            description={lists.description}
        />
    ))

    return (
        <div className= "row">
             <ListTag />
        </div>
    );
}

export default About;