//import Navbar from "./components/Navbar";
import "./css/main.css";
import "./css/style.css";
import Home from "./pages/Home"
import Login from "./pages/Login"
import AddTask from "./pages/AddTask";
import FindTask from "./pages/FindTask"
import Profie from "./pages/Profie";
import {Route,Switch} from "react-router-dom"

function App() {
  
  

  return (
    //Mobile
    <section className="">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/find-task">
          <FindTask />
        </Route>
        <Route path="/add-task">
          <AddTask />
        </Route>
        <Route path="/profile">
          <Profie />
        </Route>
      </Switch>
    </section>
  );
}

export default App;
