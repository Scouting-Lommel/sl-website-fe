import ComponentImage from "../atoms/ComponentImage"
import Image from 'next/image'
import { useAuthContext} from "../../lib/api/security/security"
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
        <div className="flex flex-row pr-5 py-2 border-b-2 border-black pl-5">
         <div className=" h-14 w-1/12 relative">
                <Image
                    loader={myLoader}
                    src={info.Logo.data.attributes.url}
                    quality={100}
                    layout="fill"
                />
            </div>
        <div className="grow"></div>
            {
                info.NavigationItems.map((item, i) => {
                    return(
                        <Navigation info={item} key={"Headernav" + i}/>
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

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}`
  }

export {Header}