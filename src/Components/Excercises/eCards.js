import React from 'react';
import Exercises from './Exercises';
import ExerciseData from './ExerciseData';

const Excercises = () => ExerciseData.map((data,index) => (

    <Exercises 
        url = {data.url}
        title = {data.title}
        button = {data.button}
    />
))