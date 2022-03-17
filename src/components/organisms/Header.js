import Logo from "../molecules/Logo"
import ComponentLink from "../atoms/ComponentLink"

const Header = ({info}) => {
    return(
        <>
        <div className="flex flex-row">
            <Logo info={info.Logo}/>
            <div className="grow"></div>
            {
                info.Navigation.NavigationItems.map((item, i) => {
                    return(
                        <ComponentLink info={item} key={i}/>
                    )
                })
            }
        </div>
        </>
    )
}

export {Header}