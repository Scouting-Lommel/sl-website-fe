import Link from "next/link";

export default function JaarthemaSmall({jaarthema}){

    return (
        <div className="w-full">
            <div className="h-2/3 mt-40 mb-10 ml-10">
                <div className="text-left text-6xl">{jaarthema}</div>
            </div>
            <div className="ml-10 mb-32 text-xl flex flex-row">
                <div className="mr-4">
                    <Link href="/info">
                        <a className="hover:bg-transparent bg-blue-500 hover:text-blue-700 font-semibold text-white py-2 px-4 border hover:border-blue-500 border-transparent rounded">
                            Ontdek het jaarthema</a>
                    </Link>
                </div>
                <div>
                    <Link href="/inschrijven">
                        <a className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Inschrijven</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
