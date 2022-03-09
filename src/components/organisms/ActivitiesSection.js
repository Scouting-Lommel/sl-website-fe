import { getUserGroup, isLoggedIn } from "../../strapi/strapi";
import Activity from "../molecules/Activity";
import ActivityModal from "../molecules/ActivityModal";

const ActivitiesSection = ({info}) => {
  return(
    <>
    {isLoggedIn() && getUserGroup() == groupName && (
        <div className="flex justify-center">
          <ActivityModal
            takName={groupName}
            activities={activities}
            takID={takID}
          ></ActivityModal>
        </div>
      )}
    </>
)
}

export {ActivitiesSection}