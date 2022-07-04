import React, {useState} from "react";
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";

import {CarType, NewComponent} from "./NewComponent";
import {Button} from "./components/Button";
import {FilterMoney, FilterType} from "./components/FilterMoney";

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

    let [a, setA] = useState(1);
    const onClickMinus = () => {
        setA(--a);
    }
    const onClickPlus = () => {
        setA(++a);
    }
    const onClickZero = () => {
        setA(0);
    }

    const [money, setMoney] = useState([
        {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
        {banknotes: 'Rubles', value: 100, number: ' w1234567890'},
        {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
        {banknotes: 'Rubles', value: 100, number: ' r1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
        {banknotes: 'Rubles', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>("All")
    let currentMoney = money;
    if (filter === "Dollar") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === "Dollars");
    }
    if (filter === "Ruble") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === "Rubles");
    }

    const onClickFilterMoney = (buttonBanknote: FilterType) => {
        console.log(buttonBanknote);
        setFilter(buttonBanknote);
    }

    return (
        <div>
            {/*////////////////////////////////////////////////////////////*/}
            <h1>Microtask 01 - components</h1>

            <div style={{marginLeft: "35px"}}>
                <Header titleForHeader={"This is the Header"}/>
                <Body titleForBody={"This is the Body"}/>
                <Footer titleForFooter={"This is the Footer"}/>
            </div>

            {/*////////////////////////////////////////////////////////////*/}
            <h1>Microtask 02 - map()</h1>

            <NewComponent car={topCars}/>

            {/*////////////////////////////////////////////////////////////*/}
            <h1>Microtask 03 - button</h1>

            <div style={{marginLeft: "35px"}}>
                <Button name={"first"} callBack={() => Button1Foo("You click on first button!", 1)}/>
                <Button name={"second"} callBack={() => Button2Foo("You click on second button!", 2)}/>
                <Button name={"third"} callBack={Button3Foo}/>
            </div>

            {/*////////////////////////////////////////////////////////////*/}
            <h1>Microtask 04 - useState</h1>

            <div style={{marginLeft: "35px"}}>
                <h2>{a}</h2>
                <button onClick={onClickMinus}>-1</button>
                <button onClick={onClickZero}>0</button>
                <button onClick={onClickPlus}>+1</button>
            </div>

            {/*////////////////////////////////////////////////////////////*/}
            <h1>Microtask 05 - filter()</h1>
            <FilterMoney currentMoney={currentMoney}
                         onClickFilterMoney={onClickFilterMoney}/>

            {/*////////////////////////////////////////////////////////////*/}


        </div>
    );
}

export default App;
