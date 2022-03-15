import { getUserGroup, isLoggedIn } from "../../lib/api/security/security";
import { File } from "../molecules/File";
import { Modal } from "../molecules/Modal"
import { useState } from "react";

const FileSection = ({info, files, group}) => {

  let [getFile, setFile] = useState(null);

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

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
              isLoggedIn() && getUserGroup() == group &&
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
                  onClick={removeFile(file.id)}
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
            index={0}
            idRef={0}
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

const removeFile = (fileID) => {

}

const addFile = (fileID, index) => {
  if (typeof window !== "undefined") {
    const name = document.getElementById("addName").value
    const file = document.getElementById("addFile").files[0]
    console.log(name)
    console.log(file)
  }
}

export {FileSection}