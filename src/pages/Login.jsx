import mylogo from "../imgs/TASKManager.svg";
// /*  */import icons from "react-icons/fa"
import {FaFacebookF, FaGoogle} from "react-icons/fa"

import {Link} from "react-router-dom";


export default function Login(){

    /* const history=useHistory();
    const [invalidValue,setInvalidValue]=useState(false);
   
    //with useState
    // const [email,setEmail]=useState();
    // const [password,setPassword]=useState();

    //with useRef
    const email=useRef();
    const password=useRef();

    const checkOut=(e)=>{
    e.preventDefault(); 
    checkValue(email,password);
    }

    const checkValue=function(email,password){
      const checkEmail=email.current.value;
      const checkPassword=password.current.value;
      const check=checkEmail==="user@gmail.com" && checkPassword==="1234";
      if (check) history.replace('/find-task');
      else setInvalidValue(true)

    }
     */


    return (
      <>
        <div className="flex w-full h-screen hero justify-center items-center">
          <div className="w-96 h-auto ">
            <h1 className="text-2xl pt-2 px-4 font-body font-semibold text-gray-700">
              <img src={mylogo} alt="logo" className="w-52" />
            </h1>
            {/* Login with Google */}
            <div className="flex mt-8">
              <div className="w-full inline-flex px-4">
                <div
                  className="w-1/6 h-12 rounded-l-lg"
                  style={{ backgroundColor: "#b4acf9" }}
                >
                  <div className="flex w-full h-full items-center justify-center">
                    <a href="https:google.com">
                      <span className="text-xl" style={{ color: "#2e2938" }}>
                        <FaGoogle />
                      </span>
                    </a>
                  </div>
                </div>
                <div
                  className="w-5/6 h-12 rounded-r-lg"
                  style={{ backgroundColor: "#363041" }}
                >
                  <div className="w-full h-full flex justify-start items-start">
                    <a
                      href="https:google.com/"
                      className="font-body pt-3 px-4 text-gray-200"
                    >
                      Google
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Login with Facebook */}
            <div className="flex mt-8">
              <div className="w-full inline-flex px-4">
                <div
                  className="w-1/6 h-12 rounded-l-lg"
                  style={{ backgroundColor: "#b4acf9" }}
                >
                  <div className="flex w-full h-full items-center justify-center">
                    <a href="https:facebook.com/">
                      <span className="text-xl" style={{ color: "#2e2938" }}>
                        <FaFacebookF />
                      </span>
                    </a>
                  </div>
                </div>
                <div
                  className="w-5/6 h-12 rounded-r-lg"
                  style={{ backgroundColor: "#363041" }}
                >
                  <div className="w-full h-full flex justify-start items-start">
                    <a
                      href="https:facebook.com"
                      className="font-body pt-3 px-4 text-gray-200"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form className="px-4">
              {/*  {invalidValue ? (
                <div className="mt-4">
                  <div className="w-full h-12 rounded-lg bg-red-600 flex justify-center items-center">
                    <p className="text-sm text-gray-100">
                      <span className="font-medium">Email</span> or{" "}
                      <span className="font-medium">password</span> invalid.
                      Please try again.
                    </p>
                  </div>
                </div>
              ) : (
                <></>
              )} */}
              <div className="mt-4 ">
                <label
                  className="text-base font-medium font-body ml-1"
                  style={{ color: "#a39ce1" }}
                  htmlFor="email"
                >
                  Your Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  style={{ backgroundColor: "#363041" }}
                  placeholder="Please insert your email address"
                  className="w-full mt-2 px-4 py-4 text-xs rounded-lg placeholder-gray-400 text-gray-200 focus:outline-none "
                />
              </div>
              <div className="mt-4 ">
                <label
                  className="text-base font-medium font-body ml-1"
                  style={{ color: "#a39ce1" }}
                  htmlFor="password"
                >
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  style={{ backgroundColor: "#363041" }}
                  placeholder="Please insert your password address"
                  className="w-full mt-2 px-4 py-4 text-xs rounded-lg placeholder-gray-400 text-gray-200 focus:outline-none "
                />
              </div>
              <div className="mt-6 mb-2 flex w-full">
                <div className="w-full">
                  <Link to="/find-task">
                    <button
                      type="submit"
                      style={{ backgroundColor: "#b4acf9", color: "#363144" }}
                      className="px-2 py-4 font-body w-full font-medium focus:outline-none rounded-lg  "
                    >
                      <span className="hover:text-gray-200">Sign In</span>
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}