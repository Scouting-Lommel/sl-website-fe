import ComponentImage from "../atoms/ComponentImage"
import ComponentLink from "../atoms/ComponentLink"

const ImageText = ({info}) => {
    const leftAlligned = info.ImageLeftAligned ? "flex flex-row-reversed" : "flex flex-row";
    return(
        <>
        <div className={leftAlligned}>
            <div className="max-w-xl">
                <h1 className="text-5xl font-bold py-2">{info.Title}</h1>
                <pre className="whitespace-pre-wrap">{info.Content}</pre>
            </div>
            <div className="flex justify-center flex-auto">
                <ComponentImage args={info.Image} />
            </div>
        </div>
        </>
    )
}

export {ImageText}