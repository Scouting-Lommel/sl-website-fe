import Social from "../molecules/Social"

const Socials = ({info}) => {
    return(
        <>
        <div className="flex flex-row">
            {info.Socials.data.map((soc, i) => {
                return <Social key={i} args={soc.attributes}/>
            })}
        </div>
        </>
    )
}

export {Socials}