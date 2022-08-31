import { useMutation } from "@apollo/client";
import { uploadClient } from "@/lib/api/apollo/mutationClient";
import { useAuthContext } from "@/lib/api/security/security";
import { deleteAct, createAct, editAct } from "@/lib/api/groups/mutations";
import { getGroupID } from "@/lib/api/groups/queries";
import Activity from "@/components/molecules/Activity";
import { Modal } from "@/components/molecules/Modal";

const ActivitiesSection = ({ info, activities, group, rerender }) => {
  // delete act
  const [removeActFunc] = useMutation(deleteAct(), {
    variables: {
      id: 0,
    },
    onCompleted(fin) {
      alert("succesfully removed activity");
      rerender();
    },
    onError(fin) {
      console.error(fin);
      alert(`something went wrong deleting this activity: ${fin}`);
    },
  });

  // edit act
  const [editActFunc] = useMutation(editAct(), {
    variables: {
      id: 0,
      title: "",
      description: "",
      startTime: undefined,
      endTime: undefined,
    },
    onCompleted(fin) {
      alert("succesfully edited activity");
      rerender();
    },
    onError(fin) {
      console.error(fin);
      alert(`something went wrong while editing this activity: ${fin}`);
    },
  });

  const [auth, setAuth] = useAuthContext();
  return (
    <>
      <div className="bg-cyan-50 flex flex-col justify-center items-center">
        <h1 className="basis-1/4 text-4xl w-full border-y-2 border-slate-800 text-center">
          {info.Title}
        </h1>
        {activities.length == 0 && (
          <>
            <div className="basis-3/4 text-2xl p-8">
              Geen activiteiten ingepland
            </div>
          </>
        )}
        {activities.length != 0 && (
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {activities.map((act, i) => {
              return (
                <li className="mb-10 ml-4" key={"act" + i}>
                  <Activity activity={act.attributes} />
                  {auth.loggedIn && auth.group == group && (
                    <div className="flex justify-around">
                      {/* edit / remove Activity button */}
                      <Modal
                        title="Edit Activity"
                        buttonID={"editActButton" + i}
                        buttonText="Edit"
                        callBack={editActCallback}
                        callBackParams={[i, act.id, editActFunc]}
                        params={[
                          {
                            id: "title" + i,
                            type: "input",
                            name: "Title",
                            defaultValue: act.attributes.Title,
                          },
                          {
                            id: "description" + i,
                            type: "wysiwyg",
                            name: "Description",
                            defaultValue: act.attributes.Description,
                          },
                          {
                            id: "startTime" + i,
                            type: "datetime-local",
                            name: "StartTime",
                            defaultValue: formatTime(act.attributes.StartTime),
                          },
                          {
                            id: "endTime" + i,
                            type: "datetime-local",
                            name: "EndTime",
                            defaultValue: formatTime(act.attributes.EndTime),
                          },
                        ]}
                      />
                      <button
                        id={"removeActButton" + i}
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          removeAct([act, removeActFunc]);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        )}
        {auth.loggedIn && auth.group == group && (
          <div className="flex justify-center">
            {/* add activity button */}
            <Modal
              title="Add Activity"
              buttonID="addActButton"
              buttonText="Add"
              callBack={addAct}
              callBackParams={[group, rerender]}
              params={[
                {
                  id: "addTitle",
                  type: "input",
                  name: "Title",
                  defaultValue: "",
                },
                {
                  id: "addDescription",
                  type: "wysiwyg",
                  name: "Description",
                  defaultValue: "",
                },
                {
                  id: "addStartTime",
                  type: "datetime-local",
                  name: "StartTime",
                  defaultValue: undefined,
                },
                {
                  id: "addEndTime",
                  type: "datetime-local",
                  name: "EndTime",
                  defaultValue: undefined,
                },
              ]}
            />
          </div>
        )}
      </div>
    </>
  );
};

const editActCallback = (params) => {
  if (typeof window !== "undefined") {
    const newTitle = document.getElementById("title" + params[0]).value;
    const newDescription = document.getElementById(
      "description" + params[0]
    ).value;
    const newStartDate = document.getElementById("startTime" + params[0]).value;
    const newEndDate = document.getElementById("endTime" + params[0]).value;
    if (!newTitle || !newDescription || !newStartDate || !newEndDate) {
      return alert("all info must be filled in");
    }
    if (!newStartDate.toString().includes("Z")) {
      newStartDate = newStartDate.toString() + ":00.000Z";
    }
    if (!newEndDate.toString().includes("Z")) {
      newEndDate = newEndDate.toString() + ":00.000Z";
    }
    params[2]({
      variables: {
        id: params[1],
        title: newTitle,
        description: newDescription,
        startTime: newStartDate,
        endTime: newEndDate,
      },
    });
  }
};

const removeAct = (params) => {
  if (typeof window !== "undefined") {
    if (
      confirm(
        `are you sure you want to delete: "${params[0].attributes.Title}"?`
      )
    ) {
      params[1]({
        variables: {
          id: params[0].id,
        },
      });
    }
  }
};

const addAct = async (params) => {
  if (typeof window !== "undefined") {
    const title = document.getElementById("addTitle").value;
    const description = document.getElementById("addDescription").value;
    console.log(description);
    const startTime = document.getElementById("addStartTime").value;
    const endTime = document.getElementById("addEndTime").value;
    const groupID = await getGroupID(params[0]);
    if (!title || !description || !startTime || !endTime) {
      return alert("all info must be filled in");
    }
    // add the activity
    if (!startTime.toString().includes("Z")) {
      startTime = startTime.toString() + ":00.000Z";
    }
    if (!endTime.toString().includes("Z")) {
      endTime = endTime.toString() + ":00.000Z";
    }
    // upload the act to the BE
    uploadClient
      .mutate({
        mutation: createAct(),
        variables: {
          title: title,
          description: description,
          startTime: startTime,
          endTime: endTime,
          groupID: groupID,
        },
      })
      .then((res) => {
        alert(`Succesfully uploaded activity`);
        params[1]();
      })
      .catch((err) => {
        alert(`an error occured trying to upload the act: ${err}`);
      });
  }
};

function formatTime(time) {
  return time.substring(0, 16);
}

export { ActivitiesSection };