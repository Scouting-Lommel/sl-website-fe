import Link from 'next/link'

export default function ComponentLink({info}){
    if(!info.Page) return(<></>)
    return (
        <>
        <Link href={info.Page}>
            <a className="px-4 text-center">{info.Label}</a>
        </Link>
        </>
    )
}