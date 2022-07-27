import React, {useState} from 'react';
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";

export const MicrotaskSix = () => {

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
        <div>
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
        </div>
    )
}