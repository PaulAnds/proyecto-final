
import  React from 'react';
import { getNotes } from '../../data';
import { Link, useParams } from 'react-router-dom';
import './Notes.css';
import Chest from '../Workouts/Chest';
import Back from '../Workouts/Back';
import Legs from '../Workouts/Legs';
import Exercises from '../Excercises/Exercises'
import Explanation from './Explanation';

const Notes = () => {
    let notes = getNotes();

    const {noteId} = useParams();
    const {dataTitle} = useParams();

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

    const filterWork = (id) => {
        let selectedWork = false;

        if (id != null) {
            selectedWork = Chest.filter(
                data => data.data == id
            );
        }

        return selectedWork;
    }

    const selectedWork = filterWork(dataTitle);

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
   
    const saved = (e,iding) => {
        localStorage.setItem('iding', iding)
    }

    const RenderData = () => (localStorage.getItem('day') == 1? 
    <ul>
        { 
            (selectedWork)?
            
            <Exercises 
                url = {Chest[Number(localStorage.getItem('iding'))-1].url}
                title = {Chest[Number(localStorage.getItem('iding'))-1].title}
            />
            
            :
            Chest.map((data, key) => (
                <li key={key}>
                    
                <Explanation
                    id={data.id}
                    title={data.title}
                    url={data.url}
                />
                <Link onClick ={e => saved(e,data.id)} to={`/Workouts/${localStorage.getItem('day')}/${data.data}`}>Start Workout!</Link>
                <br></br>
                </li>
            ))
        }
    </ul> : (localStorage.getItem('day') == 2)? 
    <ul>
    { (selectedWork)?
            
            <Exercises 
                url = {Back[Number(localStorage.getItem('iding'))-1].url}
                title = {Back[Number(localStorage.getItem('iding'))-1].title}
            />
            
            :
        Back.map((data, key) => (
            <li key={key}>
                
            <Explanation
                id={data.id}
                title={data.title}
                url={data.url}
            />
            <Link onClick ={e => saved(e,data.id)} to={`/Workouts/${localStorage.getItem('day')}/${data.data}`}>Start Workout!</Link>
            <br></br>
            </li>
        ))
    }
    </ul> : (localStorage.getItem('day') == 3)? 
    <ul>
    { (selectedWork)?
            
            <Exercises 
                url = {Legs[Number(localStorage.getItem('iding'))-1].url}
                title = {Legs[Number(localStorage.getItem('iding'))-1].title}
            />
            
            :
        Legs.map((data, key) => (
            <li key={key}>
                
            <Explanation
                id={data.id}
                title={data.title}
                url={data.url}
            />
            <Link onClick ={e => saved(e,data.id)} to={`/Workouts/${localStorage.getItem('day')}/${data.data}`}>Start Workout!</Link>
            <br></br>
            </li>
        ))
    }
    </ul> :
    <div> <h2>GO TO SLEEP NOW REST UP</h2></div>
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