import Link from "next/link";

export default function Takken(){
    return (
        <>
        <button id="TakkenDropDownButton" data-dropdown-toggle="TakkenDropDown" className="flex-none px-2 inline-flex items-center" type="button">
            Takken
            <svg className="ml-2 w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>

        <div id="TakkenDropDown" className="hidden z-10 w-44 text-base list-none divide-y shadow">
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