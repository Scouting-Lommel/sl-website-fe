import ComponentLink from "../atoms/ComponentLink"

const CallToAction = ({info}) => {
    return(
        <>
        <div className="px-11 py-4">
            <div className="flex flex-row justify-between bg-white border-2 border-blue-600 rounded-2xl py-4">
                <div>
                    <h1 className="text-3xl font-bold pl-2">{info.Title}</h1>
                    <p className="pl-2">{info.Content}</p>
                </div>
                <div className="flex flex-col justify-center px-2">
                    <ComponentLink info={info.Button}/>
                </div>
            </div>
        </div>
        </>
    )
}

export {CallToAction}