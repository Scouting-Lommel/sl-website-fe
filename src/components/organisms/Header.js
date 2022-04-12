import Logo from "../molecules/Logo"
import ComponentLink from "../atoms/ComponentLink"
import { isLoggedIn } from "../../lib/api/security/security"

const Header = ({info}) => {
    const loginBtn = {
        Page: "login",
        IsButton: false,
        Label: "Login"
    }
    return(
        <>
        <div className="flex flex-row pr-5 py-2 border-b-2 border-black">
            <Logo info={info.Logo}/>
            <div className="grow"></div>
            {
                info.Navigation.NavigationItems.map((item, i) => {
                    return(
                        <ComponentLink info={item} key={i}/>
                    )
                })
            }
            {
                !isLoggedIn() && 
                <ComponentLink info={loginBtn} key="loginBtn"/>
            }
        </div>
        </>
    )
}

export {Header}