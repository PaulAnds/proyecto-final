
import  React from 'react';
import { getNotes } from '../../data';
import { Link, useParams } from 'react-router-dom';
import './Notes.css';
import Chest from '../Workouts/Chest';
import Back from '../Workouts/Back';
import Legs from '../Workouts/Legs';
import Explanation from './Explanation';

const Notes = () => {
    let notes = getNotes();

    const {noteId} = useParams();

    const filterNotes = (id) => {
        let selectedNote = false;

        if (id > 0) {
            selectedNote = notes.filter(
                note => note.id === Number(id)
            );
        }

        return selectedNote;
    }

    const selectedNote = filterNotes(noteId);

    const renderNotes = (notes) => (
        <ul>
            {
                
                notes.map((note, key) => (
                    <li key={key}>
                        
                        {
                            (selectedNote)?
                            <div>
                                <h1>{note.title}</h1>
                                <p>{note.description}</p>
                            </div>
                            :
                            <Link to={`/Workouts/${note.id}`}>{note.title}</Link>
                        }

                    </li>
                ))
            }
        </ul> 
    )
   
    const RenderData = () => (localStorage.getItem('day') == 1? 
    <ul>
        { 
            Chest.map((data, key) => (
                <li key={key}>
                    
                <Explanation
                    id={data.id}
                    title={data.title}
                    url={data.url}
                />
                <Link to={`/Workouts/${localStorage.getItem('day')}/${data.data}`}>Start Workout!</Link>

                </li>
            ))
        }
    </ul> : (localStorage.getItem('day') == 2)? 
    <ul>
    { 
        Back.map((data, key) => (
            <li key={key}>
                
            <Explanation
                id={data.id}
                title={data.title}
                url={data.url}
            />
            <Link to={`/Workouts/${localStorage.getItem('day')}/${data.data}`}>Start Workout!</Link>

            </li>
        ))
    }
    </ul> :
    <ul>
    { 
        Legs.map((data, key) => (
            <li key={key}>
                
            <Explanation
                id={data.id}
                title={data.title}
                url={data.url}
            />
            <Link to={`/Workouts/${localStorage.getItem('day')}/${data.data}`}>Start Workout!</Link>

            </li>
        ))
    }
    </ul> 
    )

    return (
        <div>
            <div className = "Notes">
            {renderNotes(selectedNote || notes )}
            <h3>Excercises:</h3>
            <RenderData />
            </div>
        </div>
    );
};

export default Notes