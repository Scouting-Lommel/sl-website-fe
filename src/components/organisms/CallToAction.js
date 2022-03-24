import ComponentLink from "../atoms/ComponentLink"

const CallToAction = ({info}) => {
    console.log(info)
    return(
        <>
        <div className="flex flex-row justify-between bg-blue-400 py-4">
            <div>
                <h1 className="text-3xl font-bold pl-2">{info.Title}</h1>
                <p className="pl-2">{info.Content}</p>
            </div>
            <div className="flex flex-col justify-center">
                <ComponentLink info={info.Button}/>
            </div>
        </div>
        </>
    )
}

export {CallToAction}