import Activity from "../molecules/Activity"

export default function Activities({activities}){
    return (
        <div className="p-10">
            <div className="text-center text-4xl pb-20">Activiteiten</div>
        <div className="pl-64">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">   
            {activities.map(act => <Activity activity={act}/>)}               
        </ol>
        </div>
        </div>
    )
}