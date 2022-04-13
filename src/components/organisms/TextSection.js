const TextSection = ({info}) => {
    return(
        <>
        <div className="border-2 px-4 py-2">
            <h1 className="text-5xl font-bold text-center">{info.Title}</h1>
            <pre>{info.Text}</pre>
        </div>
        </>
    )
}

export {TextSection}