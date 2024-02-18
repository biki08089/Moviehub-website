import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import Mylogin from "./Components/Mylogin";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import About from "./Components/About";
import Service from "./Components/Service";
import Maincontainer from "./Components/Maincontainer";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import play from "./assets/play.png";
const API_KEY=import.meta.env.VITE_API_KEY;


function App() {
  // console.log(import.meta.env.VITE_API_KEY);
  const [login, setLogin] = useState("Log in");
  const [mysignup, setSignUp] = useState("Sign up");
  const [apiTitle, setApititle] = useState("skyfall");
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const data = await fetch(
        `https://www.omdbapi.com/?t=${apiTitle.toLowerCase()}&apikey=${API_KEY}`
      );
      const res = await data.json();
      setResponse(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  function loginPage() {
    navigate("/login");
    setLogin("Log in");
    setSignUp("Sign up");
    if (login === "Log out") {
      toast.success("Log out Successfull");
    }
  }

  function signup() {
    if (mysignup === "Sign up") {
      navigate("/signup");
    } else {
      navigate("/dashboard");
    }
  }

  return (
    <div className="bg-[#000814] pt-3">

      <nav className=" bg-[#000814] flex flex-wrap justify-evenly pt-3 pb-3 sticky top-0 ">
        <div className="flex items-center gap-1 mr-[7rem] w-[3rem] xl:w-[10rem] lg:mr-[3rem]">
          <img className="h-[35px] w-[35px] " src={play} alt="" />
          <h1 className="text-[1.2rem] text-white font-semibold">MovieHub</h1>
        </div>
        <div className="sm:order-3 sm:flex sm:items-center xl:w-[12rem]">
          <button className="border-[1px] bg-[#161d29] px-2 py-1 mr-2 rounded-md text-white"
            onClick={loginPage}>
            {login}
          </button>
          <button className="border-[1px] bg-[#161d29] px-2 py-1 mr-1 rounded-md text-white"
            onClick={signup}>
            {mysignup}
          </button>
        </div>
        <div className="pt-1 mt-2 sm:order-2 sm:h-[3rem] xl:w-[23rem]">
          <ul className="flex gap-[4rem] text-white font-medium">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/service">Services</NavLink>
            </li>
          </ul>
        </div>
   
      </nav>


      <div className="app.js lg:w-[65rem] lg:mx-auto xl:w-[75rem] 2xl:w-[90rem]">
        <Routes className="parentrout">
          <Route path="/" element={<Maincontainer />}>
            <Route
              index
              element={<Home mysignup={mysignup} setSignUp={setSignUp} />}
            />
            <Route
              path="/login"
              element={<Mylogin setSignUp={setSignUp} setLogin={setLogin} />}
            />
            <Route
              path="/signup"
              element={<Signup setSignUp={setSignUp} setLogin={setLogin} />}
            />
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  response={response}
                  getData={getData}
                  setApititle={setApititle}
                  setSignUp={setSignUp}
                  setLogin={setLogin}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
          </Route>
        </Routes>
        <hr className="my-3" />
        <div className="giving-credit text-[white] text-center pb-5">@Bikash Pradhan</div>
      </div>
    
    </div>
  );
}

export default App;
