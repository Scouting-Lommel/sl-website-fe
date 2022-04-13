import ComponentLink from "../atoms/ComponentLink"
import { Address } from "./Address"
import { Socials } from "./Socials"

const Footer = ({footInfo, socials, address}) => {
    // console.log("foorinfo: \n")
    console.log(socials.Socials.data)
    return(
        <>
        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
            <div className="flex flex-row justify-around">
                <div className="mb-6 md:mb-0 ">
                    <a href="/" className="flex items-center text-white">
                        Logo hierzo
                    </a>
                </div>
                <Address info={address}/>
                <div>
                    <h2 className="mb-6 px-4 text-sm font-semibold text-white uppercase">Beleid</h2>
                    <ul className="text-gray-400">
                    {
                        footInfo.NavigationItems.map((link, i) => {
                            return(
                                <li key={i} className="mb-4">
                                    <ComponentLink info={link}/>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 px-4 text-sm font-semibold text-white uppercase">Links</h2>
                    <ul className="text-gray-400">
                    {
                        footInfo.Link.map((link, i) => {
                            return(
                                <li key={i} className="mb-4">
                                    <ComponentLink info={link}/>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
            <hr className="my-6 border-gray-600" />
            <div className="flex flex-row justify-between">
                <div className="text-gray-500">
                    { "© 2022 " + address.Title + "™. All Rights Reserved."}
                </div>
                <div className="space-x-6 px-4">
                    <Socials info={socials}/>
                </div>
                </div>
        </footer>
        </>
    )
}

export {Footer}