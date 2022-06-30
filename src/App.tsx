import React from "react";
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";

import {CarType, NewComponent} from "./NewComponent";
import {Button} from "./components/Button";

function App() {

    const topCars: Array<CarType> = [
        {id: 1, manufacturer: 'BMW', model: 'm5cs'},
        {id: 2, manufacturer: 'Mercedes', model: 'e63s'},
        {id: 3, manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <div>
            <h1>Microtask 01</h1>
            <Header titleForHeader={"This is the Header"}/>
            <Body titleForBody={"This is the Body"}/>
            <Footer titleForFooter={"This is the Footer"}/>

            <h1>Microtask 02</h1>
            <NewComponent car={topCars}/>

            <h1>Microtask 03</h1>
            <Button name={"first"}/>
            <Button name={"second"}/>

        </div>
    );
}

export default App;
