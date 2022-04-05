import Link from 'next/link'

export default function ComponentLink({info}){
    if(!info || !info.Page) return(<></>)
    const style = info.IsButton ? " bg-blue-600 hover:bg-white text-white hover:text-blue-600 font-bold rounded border-2 border-blue-600 py-2 px-4" : "";
    return (
        <>        
            <Link href={info.Page}>
                <a className={"text-center" + style}>{info.Label}</a>
            </Link>    
        </>
    )
}