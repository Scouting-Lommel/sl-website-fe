const TextSection = ({info}) => {
    return(
        <>
        <h1 className="text-5xl font-bold text-center">{info.Title}</h1>
        <pre>{info.Text}</pre>
        </>
    )
}

export {TextSection}