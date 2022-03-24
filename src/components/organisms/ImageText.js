import ComponentImage from "../atoms/ComponentImage"
import ComponentLink from "../atoms/ComponentLink"

const ImageText = ({info}) => {
    const leftAlligned = info.ImageLeftAligned ? "flex flex-row-reversed" : "flex flex-row";
    return(
        <>
        <div className={leftAlligned}>
            <div>
                <h1 className="text-5xl font-bold">{info.Title}</h1>
                <p>{info.Content}</p>
            </div>
            <ComponentImage args={info.Image}/>
        </div>
        </>
    )
}

export {ImageText}