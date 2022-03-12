import { getUserGroup, isLoggedIn } from "../../lib/api/security/security";
import {File} from "../molecules/File";

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
      <ol className="flex flex-nowrap">
        {files.map(file => {
          <li>
            <File file={file}/>
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
          {/* add file button */}
      </div>
    }
    </div>
    </>
  );
}

export {FileSection}