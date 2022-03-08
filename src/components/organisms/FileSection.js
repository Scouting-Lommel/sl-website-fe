import { getUserGroup, isLoggedIn } from "../../strapi/strapi";
import File from "../molecules/File";
import FileModal from "../molecules/FileModal";

const FileSection = ({ files, groupName, groupID }) => {
  return (
    <div className="grid-cols-2">
      <div className="text-4xl text-center">Bestanden</div>
      <div className="px-10 py-1">
        <div className="flex flex-row justify-evenly">
          {files.map((file) => (
            <File info={file} key={file.id} />
          ))}
        </div>
      </div>
      {isLoggedIn() && getUserGroup() == groupName && (
        <div className="flex justify-center">
          <FileModal
            files={files}
            takname={groupName}
            takID={groupID}
          ></FileModal>
        </div>
      )}
    </div>
  );
}

export {FileSection}