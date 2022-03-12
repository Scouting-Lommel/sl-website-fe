import { getUserGroup, isLoggedIn } from "../../lib/api/security/security";
import Activity from "../molecules/Activity";

const ActivitiesSection = ({info, activities, group}) => {
  console.log(activities)
  return(
    <>
    <div className="bg-cyan-50 flex flex-col justify-center items-center">
    <h1 className="basis-1/4 text-4xl w-full border-y-2 border-slate-800 text-center">{info.Title}</h1>
    {
      activities.length == 0 && 
      <>
      <div className="basis-3/4 text-2xl p-8">
        Geen activiteiten ingepland
      </div>
      </>
    }
    {
      activities.length != 0 &&
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {activities.map(act => {
          <li className="mb-10 ml-4">
            <Activity activity={act.attributes} />
            {
              isLoggedIn() && getUserGroup() == group &&
              <div className="flex justify-center">
                  {/* edit / remove File button */}
              </div>
            }
          </li>
        })}
      </ol>
    }
    {
      isLoggedIn() && getUserGroup() == group &&
      <div className="flex justify-center">
          {/* add activity button */}
      </div>
    }
    </div>
    </>
)
}

export {ActivitiesSection}