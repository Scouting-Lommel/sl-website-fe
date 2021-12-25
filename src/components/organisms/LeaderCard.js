import SmallLeader from "../molecules/SmallLeader"

export default function LeaderCard({persons}){
    return (
    <div className="flex flex-row justify-around ">
        {persons.map((person)=>{
            return <SmallLeader person={person} key={person}></SmallLeader>
        })}
    </div>
    );
  }