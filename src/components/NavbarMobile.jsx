import {  FiMenu } from "react-icons/fi";

/* import { AiOutlineClose } from "react-icons/ai";
import { FaMenu } from "react-icons"; */
import mylogo from "../imgs/TASKManager.svg";
import Menu from "./Menu"

export default function NavbarMobile({ toggleButton,open }) {
    return (
      <div>
        <div className="hero w-full md:hidden">
          <div className="flex flex-col items-center justify-center w-full px-6 py-6 ">
            <div className="max-w-4xl w-full">
              <div className="flex justify-between w-full">
                <div>
                  <h1 className="font-body mt-3 font-bold text-lg tracking-wider">
                    <img src={mylogo} alt="logo" />
                  </h1>
                </div>
                <div>
                  <button className="mt-2" onClick={toggleButton}>
                    <span className="menu_color text-lg">
                      <FiMenu /> 
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {open ? (
            <Menu toggleButton={toggleButton}/>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
}


