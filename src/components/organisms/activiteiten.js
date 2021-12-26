import Activity from "../molecules/activity";

export default function Activiteiten({acts}){
    return (
        <>
    <div className="col-span-1 border-4 rounded-2xl py-4 px-4 flex flex-wrap">
        {acts.map((act)=>{
            return <Activity act={act} key={act.date}></Activity>
        })}
    </div>
    </>
    );
  }