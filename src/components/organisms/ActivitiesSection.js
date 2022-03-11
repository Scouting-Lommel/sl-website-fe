// import { getUserGroup, isLoggedIn } from "../../strapi/strapi";
import { getUserGroup, isLoggedIn } from "../../lib/api/security/security";
import Activity from "../molecules/Activity";
// import ActivityModal from "../molecules/ActivityModal";

const ActivitiesSection = ({info, activities, group}) => {
  console.log(activities)
  return(
    <>
    <h1>{info.Title}</h1>
    {
      activities.length == 0 && 
      <div>
        Geen activiteiten om te laten zien
      </div>
    }
    {
      activities.length != 0 &&
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {activities.map(act => {
          <Activity activity={act.attributes} />
        })}
      </ol>
    }
    {
      isLoggedIn() && getUserGroup() == group &&
      <div className="flex justify-center">
          {/* add activity button */}
      </div>
    }
    </>
)
}

export {ActivitiesSection}