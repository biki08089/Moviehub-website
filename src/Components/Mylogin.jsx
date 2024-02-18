import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import blade from "../assets/blade.jpg";

function Mylogin({ setLogin, setSignUp }) {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  console.log(formData.email.length);
  function handleChange(event) {
    setformData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  function dashboard() {
    navigate("/dashboard");
    setLogin("Log out");
    setSignUp("Dashboard");
    toast.success("Login successfull");
  }

  return (
    <div className="pt-4 px-3 bg-[#000814] sm:px-12 md:px-14 lg:h-[52rem] lg:flex lg:w-[100%] lg:px-3">
      <div className="md:pl-11 lg:w-[50%] lg:mt-[6rem] lg:pl-12 2xl:pl-16">
        <h1 className="text-[2rem] font-semibol text-white">Welcome Back</h1>
        <p className="text-[1.2rem] text-white font-light">
          A place where your entertainment never stops.
          <br />
          <span className="text-[#47a5c5]">Find your best suit.</span>
        </p>
        <form className="mt-2 md:w-[90%]" onSubmit={dashboard} action="">
          <label className="text-[1rem] text-white font-medium " htmlFor="">
            Email Adress
          </label>{" "}
          <br />
          <input
            className=" w-[100%] h-[2.7rem] text-[white] px-2 rounded-md bg-[#161d29] my-2"
            onChange={handleChange}
            name="email"
            value={formData.email}
            required
            type="email"
            placeholder="Enter your Email"
          />
          <br />
          <label className="text-[1rem] text-white font-medium" htmlFor="">
            Password
          </label>{" "}
          <br />
          <input
            className="w-[100%] h-[2.7rem] text-[white] px-2 rounded-md bg-[#161d29] my-2"
            onChange={handleChange}
            name="password"
            value={formData.password}
            required
            type="password"
            placeholder="Enter your Password"
          />
          <p className="text-[#47a5c5] float-right">Forgot Passwords</p>
          <br />
          <button className="sm:w-[10rem] sm:mt-5 my-2 px-5 py-2 mb-6 bg-[#ffd60a] rounded-md font-semibold w-[100%]">
            Sign in
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center flex-col lg:w-[50%]">
        <img
          className="rounded-md w-[70%] sm:w-[57%] sm:h-[36rem] md:w-[50%] lg:w-[65%] lg:h-[33rem] xl:w-[60%] 2xl:w-[50%]"
          src={blade}
          alt=""
          srcset=""
        />
        <p className="text-white my-3 sm:my-5">Your Favourites Here!</p>
      </div>
    </div>
  );
}

export default Mylogin;
