import ComponentLink from "../atoms/ComponentLink"
import ComponentImage from "../atoms/ComponentImage"

const Hero = ({info}) => {
    return(
        <>
        <div className="min-h-fit">
            <div className="flex flex-row">
                <div className="basis-1/2">
                    <h1 className="text-5xl font-bold">{info.Title}</h1>
                    <div className="flex flex-row">
                        {info.Links !== undefined && info.Links.map((link, i) => {
                            return <ComponentLink args={link} key={i}/>
                        })}
                    </div>
                </div>
                <ComponentImage args={info.Image}/>
            </div>
        </div>
        </>
    )
}

export {Hero}