import React from "react";
import './App.css';
import {MicrotaskOne} from "./tasks/task1/MicrotaskOne";
import {MicrotaskTwo} from "./tasks/task2/MicrotaskTwo";
import {MicrotaskThree} from "./tasks/task3/MicrotaskThree";
import {MicrotaskFour} from "./tasks/task4/MicrotaskFour";
import {MicrotaskFive} from "./tasks/task5/MicrotaskFive";
import {MicrotaskSix} from "./tasks/task6/MicrotaskSix";
import {MicrotaskSeven} from "./tasks/task7/MicrotaskSeven";

export const App = () => {

    return (
        <div style={{marginLeft: "30%", marginBottom: "30px"}}>

            <MicrotaskOne/>
            <MicrotaskTwo/>
            <MicrotaskThree/>
            <MicrotaskFour/>
            <MicrotaskFive/>
            <MicrotaskSix/>
            <MicrotaskSeven/>
        </div>
    );
}
