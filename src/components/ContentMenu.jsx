import { FiArrowUp } from "react-icons/fi";
import {Link} from "react-router-dom"

function ContentMenu({ toggleButton, inMenu=false}) {
  return (
    <>
      <div className="bgcolor_menu w-full h-full absolute top-0 left-0-0 z-1">
        <div className="grid grid-flow-row h-screen bgcolor_menu ">
          <div className="bgcolor_menu  grid-rows-1">
            <div className="flex justify-end items-end">
              <button
                className="px-6 py-6"
                onClick={() => {
                  inMenu(true);
                  toggleButton(false);
                }}
              >
                <span className="text-semibold text-lg tracking-wider font-body">
                  <FiArrowUp />
                </span>
              </button>
            </div>
          </div>
          <div className=" bgcolor_menu  row-span-6">
            <div className="flex flex-col items-center justify-center w-full">
              <ul className="inline-flex space-y-6 pt-10 w-full flex-col items-center justify-center">
                <li className="text-xl font-body font-semibold text-gray-800">
                  About us
                </li>
                <li className="text-xl font-body font-semibold text-gray-100">
                  Cases
                </li>
                <li className="text-xl font-body font-semibold text-gray-100">
                  Resources
                </li>
                <li className="text-xl font-body font-semibold text-gray-100">
                  <Link to="/login">Sign In</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}




export default ContentMenu;

