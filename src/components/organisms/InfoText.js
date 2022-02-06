import Image from "next/image"


export default function InfoText({title, text, image}){
    //todo image
    return (
        <div>
        <h1>{title}</h1>
        <div>{text}</div>
        </div>
    )
}