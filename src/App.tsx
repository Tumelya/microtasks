import React, {useState} from "react";
import './App.css';
import {Header} from "./tasks/task1/site/Header";
import {Body} from "./tasks/task1/site/Body";
import {Footer} from "./tasks/task1/site/Footer";

import {CarType, NewComponent} from "./tasks/task2/NewComponent";
import {Button} from "./components/Button";
import {FilterMoney, FilterType} from "./components/FilterMoney";
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {MicrotaskSeven} from "./tasks/task7/MicrotaskSeven";
import {MicrotaskOne} from "./tasks/task1/MicrotaskOne";
import {MicrotaskTwo} from "./tasks/task2/MicrotaskTwo";
import {MicrotaskThree} from "./tasks/task3/MicrotaskThree";

function App() {

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

    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"}
    ])

    const addNewMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message]);
    }

    let [title, setTitle] = useState("");

    const callBackButtonHandler = () => {
        addNewMessage(title);
        setTitle("");
    }

    return (
        <div style={{marginLeft: "30%", marginBottom: "30px"}}>

            <MicrotaskOne/>
            <MicrotaskTwo/>
            <MicrotaskThree/>

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
            <h1>Microtask 06 - input</h1>

            {/*<div style={{marginLeft: "35px"}}>
                <p><b>FullInput Component</b></p>
                <FullInput addNewMessage={addNewMessage}/>
                {message.map((el, index) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )
                })}
            </div>*/}

            <div style={{marginLeft: "35px"}}>
                <p><b>Input+Button Components</b></p>
                <Input setTitle={setTitle} title={title}/>
                <Button name={"+"} callBack={callBackButtonHandler}/>
                {message.map((el, index) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )
                })}
            </div>
            {/*////////////////////////////////////////////////////////////*/}
            <h1>Microtask 07</h1>

            <MicrotaskSeven/>
        </div>
    );
}

export default App;
