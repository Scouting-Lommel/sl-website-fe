import Link from "next/link";

export default function Verhuur(){
    return (
        <div className="flex-none px-2">
            <Link href="/verhuur">
                <a>Verhuur</a>
            </Link>
        </div>
    )
}