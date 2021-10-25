import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavbarSession from "../components/NavbarSession";
import avatar from "../imgs/pexels-caio-cardenas-2101839 1.png";
import vector from "../imgs/Vector.png"

export default function Profie() {
  return (
    <div className="h-screen hero">
      <NavbarSession />

      <div className="flex w-full h-auto  justify-center items-center">
        <div className="w-96 h-auto">
          {/* Login with Google */}
          <div className="flex mt-8">
            <div className="w-full inline-flex px-0 md:px-4">
              <Link to="/find-task">
                <div
                  className="w-12 h-12 rounded-full mt-1"
                  style={{ backgroundColor: "#363041" }}
                >
                  <div className="flex w-full h-full items-center justify-center">
                    <span className="text-base text-gray-200">
                      <FaArrowLeft />
                    </span>
                  </div>
                </div>
              </Link>
             
              <div className="w-5/6 h-16 rounded-r-lg ">
                
                <div className="w-full h-full grid grid-cols-1">
                  <p className="font-body text-2xl font-semibold px-4 text-gray-200">
                   My profile
                  </p>
                  <p
                    className="mt-1 font-body text-2xl font-semibold px-4 text-gray-200"
                    style={{ color: "#adabb1" }}
                  >
                    <span className="font-body text-sm">
                      {" "}
                       Preview my information
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 ">
            <div className="">
              <p className="inline-flex md:mt-1">
                <img
                  src={avatar}
                  alt="avatar"
                  className="rounded-full w-14 h-14 md:w-24 md:h-24"
                />

                <span className="py-1 md:py-6 px-2 text-gray-200">
                  <div className="flex flex-col">
                    <p className="text-lg font-body">Margarida Andrade</p>
                    <p
                      className="text-xs font-body inline-flex"
                      style={{ color: "#b4acf9" }}
                    >
                      My account{" "}
                    </p>
                  </div>
                </span>
              </p>
            </div>
          </div>
          {/*  */}
          <div className="">
            <div className="grid grid-cols-1 w-full h-44 ">
              <div className=" h-full">
                <div className="font-body px-4 py-2 mt-8">
                  <p
                    className="font-body text-xs font-semibold"
                    style={{ color: "#adabb1" }}
                  >
                    Display name
                  </p>
                  <p className="font-body text-gray-200">Margarida Andrade</p>
                </div>
                <div className="font-body px-4 py-2">
                  <p
                    className="font-body text-xs font-semibold"
                    style={{ color: "#adabb1" }}
                  >
                    Email
                  </p>
                  <p className="font-body text-gray-200">
                    margaridaandrade@gmail.com
                  </p>
                </div>
              </div>
              <div className="h-full hidden">
                <div className="flex items-center justify-center w-full h-full">
                  <img src={vector} alt="finalish" />
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="mt-2 mb-2 flex w-full">
            <div className="flex justify-center items-center w-full">
              <div className="">
                <Link to="/">
                  <button
                    type="submit"
                    style={{ backgroundColor: "#363041", color: "#afacb3" }}
                    className="px-2 py-4 w-72 font-body  font-medium focus:outline-none rounded-lg  "
                  >
                    Sign out
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
