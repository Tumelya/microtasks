import React, {useState} from "react";
import './App.css';
import {MicrotaskSeven} from "./tasks/task7/MicrotaskSeven";
import {MicrotaskOne} from "./tasks/task1/MicrotaskOne";
import {MicrotaskTwo} from "./tasks/task2/MicrotaskTwo";
import {MicrotaskThree} from "./tasks/task3/MicrotaskThree";
import {MicrotaskFour} from "./tasks/task4/MicrotaskFour";
import {MicrotaskFive} from "./tasks/task5/MicrotaskFive";
import {MicrotaskSix} from "./tasks/task6/MicrotaskSix";

function App() {

    return (
        <div style={{marginLeft: "30%", marginBottom: "30px"}}>

            <MicrotaskOne/>
            <MicrotaskTwo/>
            <MicrotaskThree/>
            <MicrotaskFour/>
            <MicrotaskFive/>
            <MicrotaskSix/>
            <h1>Microtask 07</h1>

            <MicrotaskSeven/>
        </div>
    );
}

export default App;
