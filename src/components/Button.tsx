//Button for microtask 03 - button
import React from "react";

type buttType = {
    name: string
    callBack:()=>void
    className?: string
}

export const Button = (props: buttType) => {

    const onClickHandler = () => {
        props.callBack();
    }

    return (
        <>
            <button className={props.className} onClick={onClickHandler}>{props.name}</button>
        </>
    )
}