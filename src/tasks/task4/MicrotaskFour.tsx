import React, {useState} from 'react';

export const MicrotaskFour = () => {

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

    return (
        <div>
            <h1>Microtask 04 - useState</h1>

            <div style={{marginLeft: "35px"}}>
                <h2>{a}</h2>
                <button onClick={onClickMinus}>-1</button>
                <button onClick={onClickZero}>0</button>
                <button onClick={onClickPlus}>+1</button>
            </div>
        </div>
    )
}