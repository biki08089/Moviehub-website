import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import bond from "../assets/bond.jpg";

function Signup({ setSignUp, setLogin }) {
  const navigate = useNavigate();
  function dashboard() {
    navigate("/dashboard");
    setSignUp("Dashboard");
    setLogin("Log out");
    toast.success("Login successfull");
  }
  return (

    <div className="px-5 bg-[#000814] pt-5 sm:px-12 md:px-14 lg:h-[52rem] lg:flex lg:w-[100%] lg:px-3 ">
      <div className="lg:w-[50%] lg:mt-[6rem] lg:pl-12">
        <h1 className="text-[2rem] font-semibold text-white">Welcome Back</h1>
        <p className="text-[1.2rem] text-white">
          A place where your entertainment never stops.
          <br />
          <span className="text-[#47a5c5]">Find your best suit.</span>
        </p>
        <form className="text-white text-[1.3rem] lg:w-[80%] 2xl:w-[80%] " onSubmit={dashboard} action="">
          <div className="flex gap-1 sm:gap-2">
            <div className="">
              <label className="text-[1rem] text-white font-medium" htmlFor="">
                First Name
              </label>{" "}
              <br />
              <input
                className="text-[1.1rem] lg:text-[1.3rem] lg:w-[100%] h-[2.7rem] w-[100%] sm:w-[42.5vw]  px-2 rounded-md bg-[#161d29] my-2 "
                required
                type="text"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="text-[1rem] text-white font-medium" tmlFor="">
                Last Name
              </label>{" "}
              <br />
              <input
                className="text-[1.1rem] lg:text-[1.3rem] lg:w-[100%] h-[2.7rem] w-[100%] sm:w-[42.5vw] px-2 rounded-md bg-[#161d29] my-2"

                required
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <label className="text-[1rem] lg:text-[1.3rem] text-white font-medium" htmlFor="">
            Email Adress
          </label>{" "}
          <br />
          <input
            className="text-[1.1rem] lg:w-[100%] w-[100%] sm:w-[86vw] h-[2.7rem] px-2 rounded-md bg-[#161d29] my-2"
            required
            type="email"
            placeholder="Enter your Email"
          />
          <br />
          <div className="flex gap-1 sm:gap-2">
            <div>
              <label className="text-[1rem] text-white font-medium" htmlFor="">
                Create Password
              </label>{" "}
              <br />
              <input
                className="text-[1.1rem] lg:text-[1.3rem] lg:w-[100%] h-[2.7rem] w-[100%] sm:w-[42.5vw] px-2 rounded-md bg-[#161d29] my-2"
                required
                type="password"
                placeholder="Enter your Password"
              />
            </div>
            <div>
              <label className="text-[1rem] text-white font-medium" htmlFor="">
                Confirm Password
              </label>{" "}
              <br />
              <input
                className="text-[1.1rem] lg:text-[1.3rem] lg:w-[100%] h-[2.7rem] w-[100%] sm:w-[42.5vw] px-2 rounded-md bg-[#161d29] my-2"
                required
                type="password"
                placeholder="Enter your Password"
              />
            </div>
          </div>
          <br />
          <button className="lg:w-[7rem] sm:w-[15vw] text-black text-[1rem]  sm:font-bold px-4 py-2 mb-6 bg-[#ffd60a] rounded-md font-semibold w-[100%]">
            Sign up
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center flex-col lg:w-[50%] ">
        <img
          className="rounded-md w-[70%] sm:w-[57%] sm:h-[36rem] md:w-[50%] lg:w-[70%] lg:h-[38rem] xl:w-[60%] 2xl:w-[55%]"
          src={bond}
          alt=""
          srcset=""
        />
        <p className="text-white my-3 sm:my-5">Your Favourites Here!</p>
      </div>
    </div>
  );
}

export default Signup;
