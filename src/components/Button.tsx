//import React from "react";
import React, {MouseEvent} from 'react';

export const Button = () => {

    /*const first = (event:MouseEvent<HTMLButtonElement>) => {
            console.log("Hi, I am Alex!");
        }
        const second = (event:MouseEvent<HTMLButtonElement>) => {
            console.log("Hi, I am Maria!");
        }*/

    const onClickHandler = (name: string) => {
        console.log(`Hello, I am ${name}`);
    }

    return (
        <>
            <button onClick={(event) => {console.log("Hi")}}>Nice</button>
            <button onClick= {(event) => onClickHandler("Alex")}>First</button>
            <button onClick={(event) => onClickHandler("Maria")}>Second</button>
        </>
    )
}