import ComponentImage from "../atoms/ComponentImage"
import ComponentLink from "../atoms/ComponentLink"

const ImageText = ({info}) => {
    const leftAlligned = info.ImageLeftAligned ? "flex-row-reverse" : "flex-row";
    return(
        <>
        <div className={"flex " + leftAlligned}>
            <div className="max-w-xl">
                <h1 className="text-5xl font-bold py-2">{info.Title}</h1>
                <pre className="whitespace-pre-wrap">{info.Content}</pre>
            </div>
            <div className="flex flex-col justify-center flex-auto">
                <div className="flex justify-center">
                    <ComponentImage args={info.Image} />
                </div>
            </div>
        </div>
        </>
    )
}

export {ImageText}