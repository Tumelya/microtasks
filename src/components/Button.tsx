import React from "react";
//import React, {MouseEvent} from 'react';

type buttType = {
    name: string
}

export const Button = (props: buttType) => {

    /*
    const first = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("Hi, I am Alex!");
    }
    const second = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("Hi, I am Maria!");
    }

    const onClickHandler = (name: string) => {
        console.log(`Hello, I am ${name}`);
    }
    */

    return (
        <>
            <button onClick={() => {console.log(`You click on ${props.name} button`)}}>{props.name}</button>
        </>
    )
}