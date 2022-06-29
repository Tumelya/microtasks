import React from 'react';
import './App.css';
import {CarType, NewComponent} from "./NewComponent";

function App() {

    const topCars: Array<CarType> = [
        {id: 1, manufacturer:'BMW', model:'m5cs'},
        {id: 2, manufacturer:'Mercedes', model:'e63s'},
        {id: 3, manufacturer:'Audi', model:'rs6'}
    ]


    return (
        <div>
           <NewComponent car={topCars}/>
        </div>
    );
}

export default App;
