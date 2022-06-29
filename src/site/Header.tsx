type HeaderType = {
    titleForHeader: string
}

export const Header = (props: HeaderType) => {
    return (
        <>
            <h2>{props.titleForHeader}</h2>
        </>
    )
}