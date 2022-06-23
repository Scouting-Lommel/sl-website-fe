import { getUserGroup, isLoggedIn, useAuthContext } from "../../lib/api/security/security";
import { File } from "../molecules/File";
import { Modal } from "../molecules/Modal"
import { uploadClient } from "../../lib/api/apollo/mutationClient";
import { createFile, linkFileToGroup, deleteFile, editFile } from "../../lib/api/groups/mutations";
import { getGroupID, getGroupFileIDs } from "../../lib/api/groups/queries"
import { useMutation } from "@apollo/client";

const FileSection = ({info, files, group, rerender}) => {

    // link the new file to the group
    const [linkFiles] = useMutation(linkFileToGroup(), {
      variables: {
        groupID: 0,
        fileIDs: [],
      },
      onCompleted(fin) {
        alert("Added file successfuly");
        rerender();
      },
      onError(fin) {
        console.error(fin);
        alert(`an error occured trying to upload the file: ${fin}`);
      },
    });

    // delete file
    const [removeFileFunc] = useMutation(deleteFile(), {
      variables: {
        id: 0,
      },
      onCompleted(fin) {
        alert("succesfully removed file");
        rerender();
      },
      onError(fin) {
        console.error(fin);
        alert(`something went wrong deleting this file: ${fin}`);
      },
    });

    // edit file
    const [editFileFunc] = useMutation(editFile(), {
      variables: {
        id: 0,
        name: ""
      },
      onCompleted(fin) {
        alert("succesfully edited file");
        rerender();
      },
      onError(fin) {
        console.error(fin);
        alert(`something went wrong while editing this file: ${fin}`);
      },
    });

    const [auth, setAuth] = useAuthContext();
  return (
    <>
    <div className="bg-sky-600 flex flex-col justify-center items-center">
    <h1 className="basis-1/4 text-4xl w-full border-y-2 border-slate-800 text-center">{info.Title}</h1>
    {
      files.length == 0 && 
      <div className="basis-3/4 text-2xl p-8">
        Geen bestanden 
      </div>
    }
    {
      files.length != 0 &&
      <ol className="flex flex-nowrap justify-around">
        {files.map((file, i) => {
          return (
          <li key={i}>
            <File file={file.attributes}/>
            {
              auth.loggedIn && auth.group == group &&
              <div className="flex justify-around">
                {/* edit file and removing file button */}
                  <Modal 
                  title="Edit File"
                  buttonID={"editFileButton"+i}
                  buttonText="Edit"
                  callBack={editFileCallback}
                  callBackParams={[i, file.id, editFileFunc]}
                  params={
                    [
                      {
                        id: "name"+i,
                        type: "input",
                        name: "Name",
                        defaultValue: file.attributes.name
                      }
                    ]
                  }
                  />
                  <button
                  id={"removeFileButton"+i}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    removeFile([file, removeFileFunc])
                  }}
                  >
                    Delete
                  </button>
              </div>
            }
          </li>
          )
        })}
      </ol>
    }
    {
      auth.loggedIn && auth.group == group &&
      <div className="flex justify-center">
          {/* add file button */}
            <Modal 
            title="Add File"
            buttonID="addFileButton"
            buttonText="Add"
            callBack={addFile}
            callBackParams={[group, linkFiles]}
            params={
              [
                {
                  id: "addName",
                  type: "input",
                  name: "Name",
                  defaultValue: ""
                },
                {
                  id: "addFile",
                  type: "file",
                  name: "File",                
                }
              ]
            }
            />
      </div>
    }
    </div>
    </>
  );
}

const editFileCallback = (params) => {
  if (typeof window !== "undefined") {
    const newName = document.getElementById("name"+params[0]).value
    params[2]({
      variables: {
        id: params[1],
        name: newName,
      },
    });
  }
}

const removeFile = (params) => {
  if (typeof window !== "undefined") {
    if (confirm(`are you sure you want to delete ${params[0].attributes.name}?`)) {
      params[1]({
        variables: {
          id: params[0].id,
        },
      });
    }
  }
}

const addFile = async (params) => {

  if (typeof window !== "undefined") {
    const name = document.getElementById("addName").value
    const file = document.getElementById("addFile").files[0]
    const groupID = await getGroupID(params[0]);
    const fileIDs = await getGroupFileIDs(params[0]);
    // upload the file to the BE
    uploadClient
      .mutate({
        mutation: createFile(),
        variables: {
          file: file,
          name: name
        },
      })
      .then((res) => {
        // need to link file to this tak
        // we need group id and all current file ids + new file id
        params[1]({
          variables: {
            groupID: groupID,
            fileIDs: getFileIDs(fileIDs, res.data.upload.data.id),
          },
        });
      })
      .catch((err) => {
        alert(`an error occured trying to link the file: ${err}`);
      });
  }

  function getFileIDs(files, newFileID) {
    let IDstring = [];
    files.map((file) => {
      IDstring.push(file.id.toString());
    });
    IDstring.push(newFileID);
  
    return IDstring;
  }
}

export {FileSection}