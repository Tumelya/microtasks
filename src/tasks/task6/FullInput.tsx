//microtask 06 - input
import React, {ChangeEvent, useState} from "react";

type FullInputPropsType = {
    addNewMessage: (title: string)=>void
}
export const FullInput = (props: FullInputPropsType) => {

    let [title, setTitle] = useState("");

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }

    const onClickButtonHandler = () => {
        props.addNewMessage(title);
        setTitle("");
    }

    return (
        <>
            <input value={title}
                onChange={onChangeInputHandler}
            />
            <button onClick={onClickButtonHandler}>+</button>
        </>
    )
}