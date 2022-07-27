type HeaderType = {
    titleForHeader: string
}

export const Header = (props: HeaderType) => {
    return (
        <>
            <h3>{props.titleForHeader}</h3>
        </>
    )
}