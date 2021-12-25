import ImageRound from "../atoms/imageRound"

export default function SmallLeader({person}){
    return ( 
    <div className="py-4 flex"> 
        <ImageRound person={person}></ImageRound>
        <div className="text-sm font-medium text-blue-500">
            `${person}`
        </div>
    </div>
    );
  }