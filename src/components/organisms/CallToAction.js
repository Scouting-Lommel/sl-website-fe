import ComponentLink from "../atoms/ComponentLink"
import Social from "../molecules/Social"

const CallToAction = ({info}) => {
    let socials = []
    if(info.Socials){
        for (let i = 0; i < info.CTAButton.length; i++) {
            const element = info.CTAButton[i];
            let args = {
                attributes: {
                    Link: element.Page,
                    Label: element.Label
                }
            }
            socials.push(<Social args={args} key={"SOC" + i}/>)
        }
    }
    return(
        <>
        <div className="px-11 py-4">
            <div className="flex flex-row justify-between bg-white border-2 border-blue-600 rounded-2xl py-4">
                <div>
                    <h1 className="text-3xl font-bold pl-2">{info.Title}</h1>
                    <p className="pl-2">{info.Content}</p>
                </div>
                {
                    !info.Socials && 
                    <div className="flex flex-col justify-center px-2">
                        <ComponentLink info={info.CTAButton[0]}/>
                    </div>
                }
                {

                    info.Socials &&
                    <div className="flex justify-center px-2">
                        {socials.map(sozial => sozial)}
                    </div>
                }
            </div>
        </div>
        </>
    )
}

export {CallToAction}