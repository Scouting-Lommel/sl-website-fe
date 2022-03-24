import ComponentLink from "../atoms/ComponentLink"

const CallToAction = ({info}) => {
    console.log(info)
    return(
        <>
        <div className="flex flex-row justify-between">
            <div>
                <h1 className="text-3xl font-bold">{info.Title}</h1>
                <p>{info.Content}</p>
            </div>
            <div>
                <ComponentLink info={info.Button}/>

            </div>
        </div>
        </>
    )
}

export {CallToAction}