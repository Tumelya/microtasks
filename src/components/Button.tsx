//Button for microtask 03 - button
import React from "react";

type buttType = {
    name: string
    callBack:()=>void
}

export const Button = (props: buttType) => {

    const onClickHandler = () => {
        props.callBack();
    }

    return (
        <>
            <button onClick={onClickHandler}>{props.name}</button>
        </>
    )
}