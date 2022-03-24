import ComponentButton from "../atoms/ComponentButton"
import ComponentLink from "../atoms/ComponentLink"

const Hero = ({info}) => {
    return(
        <>
        <div className="min-h-screen">
            <div className="flex flex-col lg:flex-row-reverse">
                <ComponentImage args={info.Image}/>
                <div>
                    <h1 className="text-5xl font-bold">{info.Title}</h1>
                    <p className="py-6">subtitle</p>
                    <div className="flex flex-row">
                        {info.Links !== undefined && info.Links.map((link, i) => {
                            return <ComponentLink args={link} key={i}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export {Hero}