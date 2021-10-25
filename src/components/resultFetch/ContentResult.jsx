import { MdDeleteOutline } from "react-icons/md";



function ContentResult({task=[]}) {

  function deleteTask(id){
    fetch(`http://102.131.41.4/task/${id}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.log(error));
  }

  return (
    <div className="mt-6 w-full">
      <div className="w-full inline-flex">
        {/*  */}
        <div
          className="h-auto w-2/12  rounded-l-lg"
          style={{ backgroundColor: "#363041" }}
        >
          <div className="w-full flex h-full justify-center items-center">
            <div className="rounded-lg w-8 h-8">
              <div className="w-full h-full flex justify-center items-center ml-2">
                <input
                  className="customize blue w-full h-full"
                  type="checkbox"
                />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="h-auto w-4/6 ">
          <div
            type="text"
            name="nome"
            id="nome"
            style={{ backgroundColor: "#363041" }}
            placeholder="Insert your task"
            className=" w-full pl-1 md:pl-0 py-3 text-xs  text-gray-200 focus:outline-none "
          >
            <p className="font-body text-base" key={task.id}>
             {task.title}
            </p>
            <p className="font-body text-sm"  style={{ color: "#b4acf9" }}>

               {task.data}
              
            </p>
          </div>
        </div>
        {/*  */}
        <div
          className="h-auto w-2/12  rounded-r-lg"
          style={{ backgroundColor: "#363041" }}
        >
          <div className="flex w-full h-full justify-center items-center">
            <button onClick={deleteTask(task.id)} className="rounded-lg text-xl text-gray-200">
              <div className="flex justify-center items-center w-full">
                <span className="text-xl" style={{ color: "#817d88" }}>
                  <MdDeleteOutline />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentResult;
