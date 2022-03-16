import { getUserGroup, isLoggedIn } from "../../lib/api/security/security";
import { File } from "../molecules/File";
import { Modal } from "../molecules/Modal"
import { uploadClient } from "../../lib/api/apollo/mutationClient";
import { createFile, linkFileToGroup, deleteFile } from "../../lib/api/groups/mutations";
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
        console.log(`${fin}`);
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
              // isLoggedIn() && getUserGroup() == group &&
              <div className="flex justify-around">
                {/* edit file and removing file button */}
                  <button
                  id={"editFileButton"+i}
                  type="button"
                  >
                    Edit
                  </button>
                  <Modal 
                  title="Edit File"
                  buttonID={"editFileButton"+i}
                  index={i}
                  idRef={file.id}
                  callBack={editFile}
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
                    removeFile(file, removeFileFunc)
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
      isLoggedIn() && getUserGroup() == group &&
      <div className="flex justify-center">
          {/* add file button */}
          <button
            id={"addFileButton"}
            type="button"
            >
              Add
            </button>
            <Modal 
            title="Add File"
            buttonID={"addFileButton"}
            index={linkFiles}
            idRef={group}
            callBack={addFile}
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

const editFile = (fileID, index) => {
  if (typeof window !== "undefined") {
    const newName = document.getElementById("name"+index).value
    console.log(newName)
  }
}

const removeFile = (file, func) => {
  if (typeof window !== "undefined") {
    if (confirm(`are you sure you want to delete ${file.attributes.name}?`)) {
      func({
        variables: {
          id: file.id,
        },
      });
    }
  }
}

const addFile = async (group, linkFiles) => {

  if (typeof window !== "undefined") {
    const name = document.getElementById("addName").value
    const file = document.getElementById("addFile").files[0]
    const groupID = await getGroupID(group);
    const fileIDs = await getGroupFileIDs(group);
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
        console.log(res.data.upload.data.id);
        // need to link file to this tak
        // we need group id and all current file ids + new file id
        // console.log(getFIleIDs(files, res.data.upload.data.id));
        linkFiles({
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