import myIlustrator from "../imgs/Reading list-cuate 1.svg";
import NavbarMobile from "../components/NavbarMobile";
import NavbarDesktop from "../components/NavbarDesktop";
import { useState } from "react";


export default function Home(){
  /* ---------------------------------------------------- */
  /* Menu hamburguer */
  /* ---------------------------------------------------- */
  const [open, setOpen] = useState();
  // const [login,setLogin]=useState()

  /* ---------------------------------------------------- */
  /* Function to menu */
  /* ---------------------------------------------------- */
  function menuOpen() {
    if (open) setOpen(false);
    else setOpen(true);
  }

  /* ---------------------------------------------------- */
  /* Render template JSX */
  /* ---------------------------------------------------- */
  return (
    <div className="h-screen hero">
      <NavbarMobile toggleButton={menuOpen} open={open} />
      <NavbarDesktop />
      <div className="w-full flex justify-center">
        <div className="max-w-5xl w-full lg:max-w-6xl ">
          <div className="flex flex-col h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 px-6  lg:px-4">
              <div className="h-auto ">
                {/* bg-red-500 */}
                <div className="pt-4 md:pt-24 md:pl-6  lg:pt-32 lg:pl-0">
                  <div className="max-w-sm w-full">
                    {/* Title default */}
                    <div className="hidden md:block">
                      <h1 className="font-body text-3xl text-gray-200">
                        <span className="font-semibold color-purple">
                          Creative Digital
                        </span>{" "}
                        Design Agency is looking for new talent
                      </h1>
                      <p className="font-body pt-3 text-base text-gray-300 font-medium">
                        Creative Digital Design Agency is looking for new talent
                      </p>
                      <button
                        className="px-6 py-2 font-body mt-4 rounded-lg "
                        style={{ backgroundColor: "#B4ACF9" }}
                      >
                        Get Started
                      </button>
                    </div>
                    {/* Title mobile */}
                    <div className="md:hidden space-y-1">
                      <h1 className="font-body text-3xl text-gray-200">
                        <span className="font-semibold color-purple">
                          Creative Digital
                        </span>{" "}
                        Design
                      </h1>
                      <p className="font-body text-3xl text-gray-200">
                        Agency is looking for new{" "}
                      </p>
                      <p className="font-body text-3xl text-gray-200">talent</p>
                      <p className="font-body text-base text-gray-300 font-medium">
                        Creative Digital Design Agency is looking for new talent
                      </p>
                      <button
                        className="px-6 py-2 mt-4 font-body rounded-lg "
                        style={{ backgroundColor: "#B4ACF9" }}
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-auto ">
                {/* bg-red-500 */}
                {/* SVG mobile */}
                <div className="flex justify-center -mt-2 items-center">
                  <img
                    src={myIlustrator}
                    alt="ilustrator"
                    className="h-48 md:hidden"
                  />
                </div>
                {/* SVG Tablet or Desktop*/}
                <div className="md:block hidden  h-56 w-full">
                  <img
                    src={myIlustrator}
                    alt="ilustrator"
                    className="h-auto h-banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}