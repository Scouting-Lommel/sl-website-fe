import ComponentImage from "../atoms/ComponentImage"
import { isLoggedIn, useAuthContext} from "../../lib/api/security/security"
import { Navigation } from "./Navigation"

const Header = ({info}) => {
    const loginBtn = {
        Href: "/login",
        IsButton: false,
        Title: "Login"
    }
    const [auth, setAuth] = useAuthContext()
    return(
        <>
        <div className="flex flex-row pr-5 py-2 border-b-2 border-black">
        <div className="max-h-3">
            {/* <ComponentImage args={info.Logo} /> */}
        </div>
        <div className="grow"></div>
            {
                info.NavigationItems.map((item, i) => {
                    return(
                        <Navigation info={item} key={i}/>
                    )
                })
            }
            {
                !auth.loggedIn && 
                <Navigation info={loginBtn} key="loginBtn"/>
            }
        </div>
        </>
    )
}

export {Header}