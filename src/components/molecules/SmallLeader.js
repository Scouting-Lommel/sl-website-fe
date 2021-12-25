import ImageRound from "../atoms/imageRound"

export default function SmallLeader({person}){
    return ( 
    <div className="py-2 flex flex-col border-2 rounded-2xl"> 
        <ImageRound person={person}></ImageRound>
        <div className="text-sm font-medium text-blue-500 text-center">
            `${person}`
        </div>
    </div>
    );
  }