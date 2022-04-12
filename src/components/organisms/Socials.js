import ComponentLink from "../atoms/ComponentLink"
import Social from "../molecules/Social"

const Socials = ({info}) => {
    return(
        <>
        <div className="flex flex-row">
            {info.Socials.data.map((soc, i) => {
                const att = {
                    Page: soc.Link,
                    Label: soc.Label
                }
                return <ComponentLink key={i} args={att}/>
            })}
        </div>
        </>
    )
}

export {Socials}