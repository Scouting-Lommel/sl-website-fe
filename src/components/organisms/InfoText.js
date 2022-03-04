import Image from "next/image"


export default function InfoText({title, text, image}){
    //todo image
    return (
        <div className="pl-10 pr-10 pb-14 pt-14 grid grid-cols-5 gap-5">
            <div className="col-span-1"></div>
            <div className="col-span-1">Image</div>
            <div className="col-span-3 grid grid-row-4 gap-2">
                <div className="row-span-1 text-3xl">{title}</div>
                <div className="row-span-3">{text}</div>
            </div>
        </div>
    )
}