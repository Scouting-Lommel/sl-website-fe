const Dropdown = ({ info }) => {
    return (
        <>
          <div className="flex flex-col justify-center text-center">
            <div className="relative inline-block text-left">
                <button
                  className="peer text-center flex px-4 font-bold"
                >
                  {info.Title}
                  {/* <!-- Heroicon name: solid/chevron-down --> */}
                  <svg
                    className="-mr-1 ml-1 h-5 w-5 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
    
              {/* menu */}
                <div className="hidden peer-hover:flex hover:flex
             flex-col drop-shadow-lg origin-top-right absolute right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-75 focus:outline-none z-10">
                  {info.DropdownComponents.map((component, i) => {
                    return (
                      <a
                        href={component.Page}
                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
                        key={"dropdown" + i}
                      >
                        {component.Label}
                      </a>
                    );
                  })}
                </div>
            </div>
          </div>
        </>
      );
    };


export { Dropdown }