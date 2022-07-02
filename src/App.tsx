import React, {useState} from "react";
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

    const Button1Foo = (tit: string, num: number) => {
        console.log(tit, num);
    }
    const Button2Foo = (tit: string, num: number) => {
        console.log(tit, num);
    }
    const Button3Foo = () => {
        console.log("You click on third button!");
    }

    let [a, setA]=useState(1);
    const onClickHandler = () => {
        setA(++a);
    }
    const onClickZero = () => {
        setA(0);
    }

    return (
        <div>
            <h1>Microtask 01 - components</h1>
            <Header titleForHeader={"This is the Header"}/>
            <Body titleForBody={"This is the Body"}/>
            <Footer titleForFooter={"This is the Footer"}/>

            <h1>Microtask 02 - map</h1>
            <NewComponent car={topCars}/>

            <h1>Microtask 03 - button</h1>
            <Button name={"first"} callBack={() => Button1Foo("You click on first button!", 1)}/>
            <Button name={"second"} callBack={() => Button2Foo("You click on second button!", 2)}/>
            <Button name={"third"} callBack={Button3Foo}/>

            <h1>Microtask 04 - useState</h1>
            <h2>{a}</h2>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickZero}>0</button>
        </div>
    );
}

export default App;
