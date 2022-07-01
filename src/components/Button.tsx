import React from "react";
//import React, {MouseEvent} from 'react';

type buttType = {
    name: string
    callBack:()=>void
}

export const Button = (props: buttType) => {

    const onClickHandler = () => {
        props.callBack();
    }

    //console.log(`You click on ${props.name} button`)

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
            <button onClick={onClickHandler}>{props.name}</button>
        </>
    )
}