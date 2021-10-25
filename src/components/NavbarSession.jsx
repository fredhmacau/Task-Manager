import { FiMenu } from "react-icons/fi";
import avatar from "../imgs/pexels-caio-cardenas-2101839 1.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaArrowDown} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavbarSession() {
  return (
    <>
      {/* Mobile Navbar withh login */}
      <div className="w-full h-auto bg-red-400">
        <div
          className="flex flex-col items-center justify-center w-full px-6 py-4"
          style={{ backgroundColor: "#363041" }}
        >
          <div className="max-w-4xl w-full">
            <div className="flex justify-between w-full">
              <div>
                <button className="mt-3 md:mt-4">
                  <span className="menu_color text-xl md:text-2xl">
                    <FiMenu />
                  </span>
                </button>
              </div>
              <div>
                <div className="">
                  <Link to="/profile">
                    <div className="inline-flex md:mt-1">
                      <img
                        src={avatar}
                        alt="avatar"
                        className="rounded-full w-10 h-10 md:w-12 md:h-12"
                      />
                      <span className="py-3 px-2 text-gray-200 md:hidden">
                        <FaArrowDown />
                      </span>
                      <span className="py-3 md:py-2 px-2 text-gray-200 hidden md:block">
                        <div className="flex flex-col">
                          <span className="text-sm font-body">
                            Margarida Andrade
                          </span>
                          <span
                            className="text-xs font-body inline-flex"
                            style={{ color: "#b4acf9" }}
                          >
                            My account{" "}
                            <span className="text-xs text-gray-200 px-2 pt-0.5">
                              <AiOutlineArrowRight />
                            </span>
                          </span>
                        </div>
                      </span>
                    </div>
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End */}
    </>
  );
}
