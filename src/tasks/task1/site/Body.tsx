type BodyType = {
    titleForBody: string
}

export const Body = (props: BodyType) => {
    return (
        <>
            <h3>{props.titleForBody}</h3>
        </>
    )
}