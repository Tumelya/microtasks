import React from 'react';
import {Button} from "../../components/Button";

export const MicrotaskThree = () => {

    const Button1Foo = (tit: string, num: number) => {
        console.log(tit, num);
    }
    const Button2Foo = (tit: string, num: number) => {
        console.log(tit, num);
    }
    const Button3Foo = () => {
        console.log("You click on third button!");
    }

    return (
        <div>
            <h1>Microtask 03 - button</h1>

            <div style={{marginLeft: "35px"}}>
                <Button name={"first"} callBack={() => Button1Foo("You click on first button!", 1)}/>
                <Button name={"second"} callBack={() => Button2Foo("You click on second button!", 2)}/>
                <Button name={"third"} callBack={Button3Foo}/>
            </div>
        </div>
    )
}