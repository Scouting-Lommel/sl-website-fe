import Link from "next/link";

export default function InschrijfSmall(){
    return (
        <div className="pl-10 pr-10 pb-14 pt-14 bg-slate-400">
        <div className="grid grid-cols-5 gap-4">
            <div className="col-span-4 grid-rows-2">
                <div className="text-3xl">Al ingeschreven?</div>
                <div className="text-2xl">Schrijf je in voor het scoutsjaar 2021-2022</div>
            </div>
            <div className="col-span-1">
                <Link href="/inscrijven">
                    <a className="hover:bg-transparent bg-blue-500 hover:text-blue-700 font-semibold text-white py-2 px-4 border hover:border-blue-500 border-transparent rounded">
                        Inschrijven</a>
                </Link>
            </div>
        </div>
        </div>)
}