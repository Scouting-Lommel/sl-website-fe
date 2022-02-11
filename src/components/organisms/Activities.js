import { getUserGroup, isLoggedIn } from "../../strapi/strapi"
import Activity from "../molecules/Activity"
import ActivityModal from "../molecules/ActivityModal"

export default function Activities({activities, groupName, takID}){
    return (
        <div className="p-10">
            <div className="text-center text-4xl pb-20">Activiteiten</div>
        <div className="pl-64">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">   
            {activities.map((act, i) => <Activity activity={act} key={i}/>)}               
        </ol>
        </div>
        {isLoggedIn() && getUserGroup() == groupName && <div className="flex justify-center"> 
                <ActivityModal takName={groupName} activities={activities} takID={takID}></ActivityModal>
            </div>}
        </div>
    )
}