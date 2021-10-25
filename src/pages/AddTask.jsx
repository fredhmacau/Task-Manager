import {FaArrowLeft} from "react-icons/fa"
import { Link } from "react-router-dom";
import NavbarSession from "../components/NavbarSession";
import {useRef} from "react"  

export default function AddTask() {
/* ---------------------------------------------------- */
/* Declaration of variables hooks*/
/* ---------------------------------------------------- */
  const formTitle = useRef();
  const formDate = useRef();

/* ---------------------------------------------------- */
/* Create functions*/
/* ---------------------------------------------------- */
  function formSubmit(e){
    e.preventDefault()
    formData(formTitle.current.value,formDate.current.value)
  }
  function formData(title,date){
    const myCredential = {
      mode: "cors",
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Accept": "*/*",
      },
      body:{
        "title":title,
        "date":date
      }
    };
    fetch("http://102.131.41.4/task", myCredential)
      .then((response) => console.log(response.json()))
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  return (
    <div className="h-screen hero">
      <NavbarSession />

      <div className="flex w-full h-auto  justify-center items-center">
        <div className="w-96 h-auto md:w-500">
          {/* Login with Google */}
          <div className="flex mt-8">
            <div className="w-full inline-flex px-4">
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
                    Add Task
                  </p>
                  <p
                    className="mt-1 font-body text-2xl font-semibold px-4 text-gray-200"
                    style={{ color: "#adabb1" }}
                  >
                    <span className="font-body text-sm">
                      {" "}
                      Add your task to be registered
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="mt-8">
              <label
                className="text-base font-medium font-body ml-1"
                style={{ color: "#a39ce1" }}
                htmlFor="nome"
              >
                Title task:
              </label>
              <input
                type="text"
                name="nome"
                id="nome"
                ref={formTitle}
                style={{ backgroundColor: "#363041" }}
                placeholder="Insert your task"
                className="w-full mt-2 px-4 py-4 text-xs rounded-lg placeholder-gray-400 text-gray-200 focus:outline-none "
              />
            </div>
            <div className="mt-4 ">
              <label
                className="text-base font-medium font-body ml-1"
                style={{ color: "#a39ce1" }}
                htmlFor="nome"
              >
                Date:
              </label>
              <input
                type="date"
                name="nome"
                id="nome"
                ref={formDate}
                style={{ backgroundColor: "#363041" }}
                placeholder="Today"
                className="w-full mt-2 px-4 py-4 text-xs rounded-lg placeholder-gray-400 text-gray-200 focus:outline-none "
              />
            </div>
            <div className="mt-6 mb-2 flex w-full">
              <div className="grid grid-cols-1 w-full gap-y-3">
                <div className="w-full">
                  <button
                    type="submit" 
                    onClick={formSubmit}
                    style={{ backgroundColor: "#b4acf9", color: "#363144" }}
                    className="px-2 py-4 font-body w-full font-medium focus:outline-none rounded-lg  "
                  >
                    Create Task
                  </button>
                </div>
                <div className="w-full">
                  <button
                  
                    type="submit"
                    style={{ backgroundColor: "#363041", color: "#afacb3" }}
                    className="px-2 py-4 font-body w-full font-medium focus:outline-none rounded-lg  "
                  >
                    Edit Task
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
