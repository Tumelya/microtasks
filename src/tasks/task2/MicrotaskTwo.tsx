import React from 'react';
import {CarType, NewComponent} from "./NewComponent";

export const MicrotaskTwo = () => {

    const topCars: Array<CarType> = [
        {id: 1, manufacturer: 'BMW', model: 'm5cs'},
        {id: 2, manufacturer: 'Mercedes', model: 'e63s'},
        {id: 3, manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <div>
            <h1>Microtask 02 - map()</h1>

            <NewComponent car={topCars}/>
        </div>
    )
}