import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './Components/App';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Graph from './Components/Graph/Graph';
import Notes from './Components/Notes/Notes'
import Error404 from './Components/Error/404'

const AppRoutes = () => (
    <App>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Workouts' element={<About />} />
            <Route path='/Graph' element={<Graph />} />
            <Route path='/Workouts/:noteId' element={<Notes />} />
            <Route path='/Workouts/:noteId/:dataTitle' element={<Notes />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
    </App>
)

export default AppRoutes;