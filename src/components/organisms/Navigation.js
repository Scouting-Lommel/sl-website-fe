import { useState } from "react";
import ComponentLink from "@/atoms/ComponentLink";

const Navigation = ({ info }) => {
  // is dropdown
  const [active, setActive] = useState(false);
  if (!info.IsDropdown) {
    const data = {
      Page: info.Href,
      Label: info.Title,
    };
    return (
      <div className="flex flex-col justify-center">
        <ComponentLink info={data} />
      </div>
    );
  }
  const showDropdownStyle = active ? "" : " hidden";
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="text-center flex py-2 px-4 font-bold"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={() => {
                setActive(~active);
              }}
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
          </div>

          <div
            className={
              "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-75 focus:outline-none z-10 " +
              showDropdownStyle
            }
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
              {info.DropdownComponents.map((component, i) => {
                return (
                  <a
                    href={component.Page}
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                    key={"dropdown" + i}
                  >
                    {component.Label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Navigation };
