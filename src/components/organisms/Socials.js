import Social from "../molecules/Social"

const Socials = ({info}) => {
    return(
        <>
        <div className="flex flex-row">
            {info.data.map((soc, i) => {
                return <Social key={i} args={soc}/>
            })}
        </div>
        </>
    )
}

export {Socials}