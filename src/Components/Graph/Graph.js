import React from 'react';
import CanvasJSReact from '../../canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function Graph(props) {

    const optionsc = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: "Chest Workout"
        },
        axisY: {
            title: "Weight",
            suffix: " lb"
        },
        axisX: {
            title: "Days",
            prefix: "D ",
            interval: 2
        },
        data: [{
            type: "line",
            toolTipContent: "Day {x}: {y} lb",
            dataPoints: [
                { x: 1, y: Number(localStorage.getItem('Bench Press Plano')) },
                { x: 2, y: Number(localStorage.getItem('bench press inclinado')) },
                { x: 3, y: Number(localStorage.getItem('fly')) },
                { x: 4, y:  Number(localStorage.getItem('press maquina')) },
                { x: 5, y: Number(localStorage.getItem('tricep cuerda'))},
                { x: 6, y: Number(localStorage.getItem('polea tricep')) },
                { x: 7, y: Number(localStorage.getItem('copa tricep')) },
            ]
        }]
    }
    const optionsb = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: "Back Workout"
        },
        axisY: {
            title: "Weight",
            suffix: " lb"
        },
        axisX: {
            title: "Days",
            prefix: "D ",
            interval: 2
        },
        data: [{
            type: "line",
            toolTipContent: "Day {x}: {y} lb",
            dataPoints: [
                { x: 1, y: Number(localStorage.getItem('remo supino')) },
                { x: 2, y: Number(localStorage.getItem('lat pulldown')) },
                { x: 3, y: Number(localStorage.getItem('JPG Lat pulldown')) },
                { x: 4, y:  Number(localStorage.getItem('remo')) },
                { x: 5, y: Number(localStorage.getItem('cable lat pullover'))},
                { x: 6, y: Number(localStorage.getItem('curl en banco')) },
                { x: 7, y: Number(localStorage.getItem('barra z')) },
                { x: 7, y: Number(localStorage.getItem('hammer curls')) },
            ]
        }]
    }
    const optionsl = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: "Leg Workout"
        },
        axisY: {
            title: "Weight",
            suffix: " lb"
        },
        axisX: {
            title: "Days",
            prefix: "D ",
            interval: 2
        },
        data: [{
            type: "line",
            toolTipContent: "Day {x}: {y} lb",
            dataPoints: [
                { x: 1, y: Number(localStorage.getItem('Press militar')) },
                { x: 2, y: Number(localStorage.getItem('elevaciones lats')) },
                { x: 3, y: Number(localStorage.getItem('reverse flys')) },
                { x: 4, y:  Number(localStorage.getItem('sentadillas')) },
                { x: 5, y: Number(localStorage.getItem('peso muerto rumano'))},
                { x: 6, y: Number(localStorage.getItem('press pierna')) },
                { x: 7, y: Number(localStorage.getItem('curl para femoral')) },
                { x: 7, y: Number(localStorage.getItem('extension cuadriceps')) },
                { x: 7, y: Number(localStorage.getItem('elevacion pantorrilla')) },
            ]
        }]
    }
    
    return (
        <div>
        <CanvasJSChart options = {optionsc}/>
        <br></br>
        <CanvasJSChart options = {optionsb}/>
        <br></br>
        <CanvasJSChart options = {optionsl}/>
        <br></br>

        </div>
    );
}

export default Graph;