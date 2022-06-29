type FooterType = {
    titleForFooter: string
}

export const Footer = (props: FooterType) => {
    return (
        <>
            <h3>{props.titleForFooter}</h3>
        </>
    )
}