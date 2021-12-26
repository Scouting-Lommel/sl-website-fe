export default function Activity({act}){
    return ( 
    <div className="py-2 flex flex-col w-full"> 
        {act.date} : {act.info}
    </div>
    );
  }