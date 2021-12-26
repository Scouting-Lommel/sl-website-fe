import Link from "next/link";
import React from "react";

export default function Takken(){
    // honestly no idea why this works
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
      setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
      setDropdownPopoverShow(false);
    };
    return (
        <>
        <button id="TakkenDropDownButton" ref={btnDropdownRef} onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }} className="flex-none px-2 inline-flex items-center" type="button">
            Takken
            <svg className="ml-2 w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>

        <div id="TakkenDropDown" ref={popoverDropdownRef} className={
           (dropdownPopoverShow ? "block " : "hidden ") +
        "z-10 w-44 list-none divide-y shadow"}>
            <ul className="py-1" aria-labelledby="TakkenDropDownButton">
            <li>
                <Link href="/kapoenen">
                    <a className="block">Kapoenen</a>
                </Link>
            </li>
            <li>
                <Link href="/welpen">
                    <a className="block">Welpen</a>
                </Link>
            </li>
            <li>
                <Link href="/akabe">
                    <a className="block">Akabe</a>
                </Link>
            </li>
            <li>
                <Link href="/jonggivers">
                    <a className="block">Jonggivers</a>
                </Link>
            </li>
            <li>
                <Link href="/givers">
                    <a className="block">Givers</a>
                </Link>
            </li>
            <li>
                <Link href="/kapoenen">
                    <a className="block">Jin</a>
                </Link>
            </li>
            </ul>
        </div>
        </>
    )
}