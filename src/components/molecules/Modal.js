import { useState } from "react";
import ComponentInput from "../atoms/ComponentInput";

/**
 * params:
 * [
 *      {
 *          id: string
 *          type: string
 *          name: string
 *          defaultValue: string
 *      }
 * ]
 * title: the title on the top of the modal
 * callback: the function to call when confirming, has 2 parameters: idRed and index
 * callBackParams: the params given in the callback function
 * buttonID: the id off the button to click when wanting to open the modal
 */
const Modal = ({title, params, callBack, buttonID, buttonText, callBackParams}) => {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    const openModal = () => {
        setIsOpen(true);
    }

    return(
        <>
         <button
            id={buttonID}
            type="button"
            onClick={() => openModal()}
            >
              {buttonText}
            </button>
         {isOpen && (
        <div
          id="defaultModal"
          aria-hidden="true"
          className="fixed flex justify-center z-50 items-center h-full w-full h-modal md:h-full inset-0"
        >
          <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                  {title}
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
              <div className="p-6 space-y-1 flex flex-col">
                {params.map((ip, i) => {
                    return(
                        <>
                        <div key={"modal"+i}>
                          <label htmlFor={ip.id} className="text-white">{ip.name+":"}</label>
                          <ComponentInput args={ip}/>
                          <br/>
                        </div>
                        </>
                    )
                })}
              </div>
              {/* <!-- Modal footer --> */}
              <div className="flex flex-row items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button
                  onClick={() => {callBack(callBackParams); closeModal()}}
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  Confirm
                </button>
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
    )
}

export {Modal}