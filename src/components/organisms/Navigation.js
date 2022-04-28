import { useState } from "react";
import ComponentLink from "../atoms/ComponentLink"
import Link from 'next/link'

const Navigation = ({info}) => {
    if(!info.IsDropdown){
        const data = {
            Page: info.Href,
            Label: info.Title
        };
        return (
            <ComponentLink info={data} />
        );

    }
    // is dropdown
    const [active, setActive] = useState(false);
    return(
        <>
        <div className="flex flex-col">
            <Link href={info.Href}>
                <a className="text-center flex font-bold py-2 px-4 dropdown-toggle">{info.Title}
                <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                class="w-2 ml-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                >
                <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                ></path>
                </svg>
                </a>
            </Link>
            {
                active && 
                <ul
                class="dropdown-menu min-w-max relative inline-block text-base z-50 py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none bg-gray-800"
                aria-labelledby="dropdownMenuButton2"
                >
                    {
                        info.DropdownComponents.map(component => {
                            return(
                            <li>
                                <a
                                className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700"
                                href={component.Page}
                                >
                                {component.Label}
                                </a>
                            </li>
                            )
                        })
                    }
                </ul>
            }
            </div>
        </>
    )
}

export {Navigation}