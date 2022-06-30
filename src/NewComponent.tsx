import React from 'react';
import './NewComponent.css';

type NewComponentType = {
    car: Array<CarType>
}

export type CarType = {
    id: number,
    manufacturer: string,
    model: string
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            <table>
                <thead>
                <tr>
                    <th> Manufacturer:</th>
                    <th> Model:</th>
                </tr>
                </thead>
                <tbody>
                {props.car.map(el => {
                    return (
                        <tr key={el.id}>
                            <td>{el.manufacturer}</td>
                            <td>{el.model}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </ul>
    )
}