import React from 'react';
import '../../App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";

export const MicrotaskOne = () => {
    return (
        <div>
            <h1>Microtask 01 - components</h1>

            <div style={{marginLeft: "35px"}}>
                <Header titleForHeader={"This is the Header"}/>
                <Body titleForBody={"This is the Body"}/>
                <Footer titleForFooter={"This is the Footer"}/>
            </div>
        </div>
    )
}