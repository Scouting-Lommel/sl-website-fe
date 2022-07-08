import ComponentImage from "../atoms/ComponentImage"

const ImageText = ({info}) => {
    const leftAlligned = info.ImageLeftAligned ? "flex-row-reverse" : "flex-row";
    return(
        <>
        <div className={"py-5 flex " + leftAlligned}>
            <div className="max-w-xl">
                <h1 className="text-5xl font-bold py-2">{info.Title}</h1>
                <pre className="whitespace-pre-wrap">{info.Content}</pre>
            </div>
            <div className="flex flex-col justify-center flex-auto px-24 py-4">
                <div className="flex justify-center relative w-full h-full">
                    {info.Image && info.Image.data && info.Image.data.attributes && <ComponentImage src={info.Image.data.attributes.url}/>}
                </div>
            </div>
        </div>
        </>
    )
}

export {ImageText}