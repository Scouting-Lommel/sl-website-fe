import SmallLeader from "../molecules/SmallLeader"

export default function LeaderCard({persons}){
    return (
    <div className="divide-x divide-gray-200">
        {persons.map((person)=>{
            return <SmallLeader person={person} key={person}></SmallLeader>
        })}
    </div>
    );
  }