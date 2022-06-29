import React from 'react';

type NewComponentType = {
    title: string
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <>
            <h1>{props.title}</h1>
        </>
    )
}