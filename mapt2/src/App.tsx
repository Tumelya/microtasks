import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";

function App() {
    return (
        <div>
            <Header titleForHeader={"This is the Header"}/>
            <Body titleForBody={"This is the Body"}/>
            <Footer titleForFooter={"This is the Footer"}/>
        </div>
    );
}

export default App;
