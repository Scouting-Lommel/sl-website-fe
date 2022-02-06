import Image from "next/image"
import ScoutsGazetArticle from '../molecules/ScoutsGazetArticle'

export default function ScoutgazetSmall({gazets}){
    //todo image
    console.log(gazets)
    return (
        <div>
        <span>scoutsgazet</span>
        <div>
            {gazets.map((gazet) => <ScoutsGazetArticle info={gazet} key={gazet.id}/>)}
        </div>
        </div>
    )
}