//import { FiArrowUp, FiMenu } from "react-icons/fi";
/* import { AiOutlineClose } from "react-icons/ai";
import { FaMenu } from "react-icons"; */
import mylogo from "../imgs/TASKManager.svg";
import "../css/style.css";
import { Link } from "react-router-dom";

export default function NavbarDesktop () {
  
    return (
      <>
        <div className="hidden md:block">
          <header className="hero w-full flex items-center justify-center lg:px-6">
            <div className="lg:max-w-6xl max-w-3xl w-full">
              <main className="w-full  h-16">
                <div className="grid grid-cols-5">
                  <div className="px-4 pt-5 lg:px-4 lg:py-6">
                    <h1 className="">
                      <img
                        src={`${mylogo}`}
                        className="md:w-36 lg:w-40"
                        alt="logo"
                      />
                    </h1>
                  </div>
                  <div className="col-span-3 px-2 pt-4 lg:px-4 lg:py-6 h-16">
                    <div className="w-full flex pb-1 justify-center items-center">
                      <ul className="inline-flex space-x-6">
                        <li
                          className="text-lg font-body font-semibold"
                          style={{ color: "#B4ACF9" }}
                        >
                          About us
                        </li>
                        <li className="text-lg font-body font-semibold text-gray-100">
                          Cases
                        </li>
                        <li className="text-lg font-body font-semibold text-gray-100">
                          Resources
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="px-4 py-2 lg:px-2 lg:py-4">
                    <div className="w-full flex items-center justify-center">
                     <Link to='/login'> 
                     <button
                        className="px-8 py-2 hover:text-gray-200 shadow-sm rounded-lg text-semibold font-body text-gray-800"
                        style={{ backgroundColor: "#b4acf9" }}
                      >
                          Sign In
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </header>
        </div>
      </>
    );

}
