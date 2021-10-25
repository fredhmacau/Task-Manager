import {HiPlus, HiSearch} from "react-icons/hi"
import NavbarSession from "../components/NavbarSession";

import {Link} from "react-router-dom"
import { useEffect,useState,useRef } from "react"; 
import Error from "../components/Error";
import ContentResult from "../components/resultFetch/ContentResult";

export default function AddTask() {
  /* ---------------------------------------------------- */
  /* Add Variables */
  /* ---------------------------------------------------- */
  let [tasks, setTasks] = useState([]);
  let [result, setResult] = useState([]);
  const [error, setError] = useState("");
  const [inputSearch,setInputSearch]=useState(false)
  const search = useRef();

  
  /* ---------------------------------------------------- */
  /* UseEffect to render all tasks*/
  /* ---------------------------------------------------- */
  useEffect(() => {
    fetch("https://tlzora.deta.dev/task")
      .then((response) => response.json())
      .then((data) => setTasks([...data]))
      .catch((err) => setError(err.message));
  }, []);
  
  /* ---------------------------------------------------- */
  /* UseEffect to render result of search */
  /* ---------------------------------------------------- */
  useEffect(()=>{
    fetch("https://tlzora.deta.dev/task")
      .then((response) => response.json())
      .then((data) => {
        setInputSearch(true);
        setResult([...data]);
      })
      .catch((err) => setError(err.message));
  },[]);
  
  /* ---------------------------------------------------- */
  /* Code of Search */
  /* ---------------------------------------------------- */
  function callSearch() {
    findSearch(search.current.value);
  }
  function findSearch(search) {
    console.log(search);
    if(search!=='') setInputSearch(true);
  }


/* ---------------------------------------------------- */
/* Render template JSX */
/* ---------------------------------------------------- */
  return (
    <div className="h-screen hero">
      <NavbarSession />

      <div className="flex w-full h-auto pt-8  justify-center items-center">
        <div className="w-96 h-full md:w-500 ">
          {/* Login with Google */}
          <div className="flex mt-8">
            <div className="w-full inline-flex px-4">
              <div className="w-full h-16 rounded-r-lg ">
                <div className="w-full h-full flex justify-start items-start">
                  <span
                    href=""
                    className="font-body text-2xl font-semibold  text-gray-200"
                  >
                    My Tasks
                    <p className="pt-1 font-body text-sm font-medium">
                      Register your tasks and have a better monitoring of your
                      activities
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="mt-4">
              <input
                type="text"
                name="nome"
                id="nome"
                ref={search}
                style={{ backgroundColor: "#363041" }}
                
                className=" w-full mt-2  md:pl-24 pl-16 py-5 text-xs rounded-lg  text-gray-200 focus:outline-none "
              />
              <div className="-mt-12 md:ml-6 ml-2">
                <button
                  onClick={callSearch}
                  style={{ backgroundColor: "#b4acf9" }}
                  className="rounded-lg w-10 h-10 ml-2 text-xl text-gray-200"
                >
                  <div className="flex justify-center items-center w-full">
                    <span>
                      <HiSearch />
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Results */}
            {
              inputSearch?(
                result?result.slice(0,4).map((task)=><ContentResult task={task} key={task.id}/>):
                <Error error={error}/>
              ):(
                tasks?tasks.slice(0,4).map((task)=><ContentResult task={task} key={task.id}/>):
                <Error error={error}/>
              )
            }
            {/* end results */}
            <div className="mt-6 flex w-full justify-center items-center">
              <div className=" ">
                <Link to="/add-task">
                  <button
                    type="button"
                    style={{ backgroundColor: "#b4acf9", color: "#363144" }}
                    className="py-4 px-8 font-body w-full font-medium focus:outline-none rounded-lg  "
                  >
                    <span className="hover:text-gray-200">
                      <HiPlus />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            {/* Results end */}
          </div>
        </div>
      </div>
    </div>
  );
}
