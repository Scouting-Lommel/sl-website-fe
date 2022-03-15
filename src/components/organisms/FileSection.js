import { getUserGroup, isLoggedIn } from "../../lib/api/security/security";
import {File} from "../molecules/File";
import {Modal} from "../molecules/Modal"

const FileSection = ({info, files, group}) => {
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
          <li id={i}>
            <File id={i} file={file.attributes}/>
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
                  callBack={editActivity}
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
      </div>
    }
    </div>
    </>
  );
}

const editActivity = (index) => {

}

export {FileSection}