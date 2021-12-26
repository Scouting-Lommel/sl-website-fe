import SmallLeader from "../molecules/smallLeader"

export default function LeaderCard({persons}){
    return (
    <div className="flex flex-row flex-nowrap justify-around border-4 rounded-2xl py-1">
        {persons.map((person)=>{
            return <SmallLeader person={person} key={person}></SmallLeader>
        })}
    </div>
    );
  }