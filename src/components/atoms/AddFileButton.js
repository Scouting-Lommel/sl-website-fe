import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { uploadClient } from "../../apollo-client";

export default function AddFileButton({ takID, files }) {
  // modal stuff
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const UPLOAD_FILE = gql`
    mutation ($file: Upload!, $name: String) {
      upload(info: { name: $name }, file: $file) {
        data {
          id
        }
      }
    }
  `;

  const LINK_FILE = gql`
    mutation ($groupID: ID!, $fileIDs: [ID]) {
      updateGroup(id: $groupID, data: { Files: $fileIDs }) {
        data {
          id
        }
      }
    }
  `;

  // TODO: if user uploads 2 files at the same time, they will not both be added because only the latest file id will be added to
  // the list, so a better practice would be to get all file ids on each request, n=but thats not very important right now

  //linking file to page logic
  const [linkFiles, { data }] = useMutation(LINK_FILE, {
    variables: {
      groupID: takID,
      fileIDs: [],
    },
    onCompleted(fin) {
      alert("Added file successfuly");
      console.log(`${fin}`);
      closeModal();
    },
    onError(fin) {
      console.error(fin);
      alert(`an error occured trying to upload the file: ${fin}`);
    },
  });

  //file data stuff
  let [getImage, setImage] = useState(null);

  function onFileChange(event) {
    setImage(event.target.files[0]);
  }

  // mutation logic
  const onSubmit = (e) => {
    e.preventDefault();

    uploadClient
      .mutate({
        mutation: UPLOAD_FILE,
        variables: {
          file: getImage,
        },
      })
      .then((res) => {
        console.log(res.data.upload.data.id);
        // need to link file to this tak
        // we need group id and all current file ids + new file id
        console.log(getFIleIDs(files, res.data.upload.data.id));
        linkFiles({
          variables: {
            groupID: takID,
            fileIDs: getFIleIDs(files, res.data.upload.data.id),
          },
        });
      })
      .catch((err) => {
        alert(`an error occured trying to link the file: ${err}`);
      });
  };

  return (
    <>
      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={openModal}
      >
        Add
      </button>
      {isOpen && (
        <div
          id="defaultModal"
          aria-hidden="true"
          className="fixed flex justify-center z-50 items-center h-full w-full h-modal md:h-full inset-0"
        >
          <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
            {/* <!-- Modal content --> */}
            <div className="relative bg-rose-400 rounded-lg shadow">
              {/* <!-- Modal header --> */}
              <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                  Add a file
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={closeModal}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-6 space-y-6">
                <form onSubmit={onSubmit}>
                  <input
                    type="file"
                    name="files"
                    onChange={(event) => {
                      onFileChange(event);
                    }}
                    alt="image"
                  />
                  <br />
                  <button
                    className="mt-4 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
                    type="submit"
                  >
                    Upload
                  </button>
                </form>
              </div>
              {/* <!-- Modal footer --> */}
              <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button
                  onClick={closeModal}
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function getFIleIDs(files, newFileID) {
  let IDstring = [];
  files.map((file) => {
    IDstring.push(file.id.toString());
  });
  IDstring.push(newFileID);

  return IDstring;
}
