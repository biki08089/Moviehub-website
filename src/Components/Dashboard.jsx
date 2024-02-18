import { useEffect, useState } from "react";
import NotFound from "./NotFound";
import Subdashboard from "./Subdashboard";
import search from "../assets/search.png"

function Dashboard({ setSignUp, setLogin, setApititle, getData, response }) {
  const [readMore, setReadmore] = useState(false);
  console.log(response);
  function handleValue(event) {
    setApititle(event.target.value);
  }

  function changeReadMore() {
    setReadmore((prev) => {
      return !prev;
    });
  }

  useEffect(() => {
    setSignUp("Dashboard");
    setLogin("Log out");
  }, []);

  if (!response.Title) {
    return (
      <div className="px-5 pt-4">
        <div className="flex sm:w-[80%] mx-auto md:w-[70%] xl:w-[50%]">
          <input
            required
            onChange={handleValue}
            className="h-[3rem] w-[100%]   text-[1rem] text-[white] p-2 rounded-lg bg-[#2c333f]"
            type="email"
            placeholder="Search your fav movie."
          />
          {/* <label className="border" htmlFor="">btn</label> */}
          <img
            onClick={getData}
            className="h-[35px] w-[35px] mt-1 ml-1"
            src={search}
            alt=""
          />
        </div>
        <NotFound></NotFound>
      </div>
    );
  }

  return (
    <div className="px-5 pt-5  bg-[#000814] sm:px-12 md:px-16 ">
      <p className="text-[1.1rem] text-[white] font-semibold lg:hidden">
        Search your movie name:
      </p>

      <div className="flex items-center lg:pl-14  lg:justify-center">
        <input
          className="xl:w-[50%] md:w-[80%] lg:w-[50%]  w-[90%] h-[2.7rem] text-[white] text-[1.1rem] px-2 rounded-md bg-[#161d29] my-2"
          required
          onChange={handleValue}
          type="email"
          placeholder="Search your fav movie."
        />
        {/* <label className="border" htmlFor="">btn</label> */}
        <img
          className="h-[35px] w-[35px] ml-2"
          onClick={getData}
          src={search}
          alt=""
        />
      </div>
      <div className="lg:h-[52rem] lg:flex lg:w-[100%] lg:px-3">
        <div className="lg:w-[50%] lg:mt-[3rem] lg:pl-12">
          <h1 className="text-[2rem] font-semibold text-white">
            {response.Title}
          </h1>
          <p className="text-[1.1rem] text-[white]">
            {`${response.Title} (${response.Year}) ${response.Awards} | Runtime:${response.Runtime}`}
            <br />
            <span className="text-[#47a5c5]">{response.Actors}</span>
          </p>
          <p className="text-[white] text-[1.1rem]">{response.Plot}</p>

          <p> {readMore ? <Subdashboard res={response}></Subdashboard> : ""}</p>
          <button
            className="px-5 py-2 my-3 bg-[#ffd60a] rounded-md font-semibold"
            onClick={changeReadMore}
          >
            {readMore ? "Show Less" : "Read More"}
          </button>
        </div>
        <div className="flex flex-col items-center justify-center mt-4 lg:w-[50%] lg:justify-normal lg:mt-[3rem]">
          <img
            className="rounded-md w-[70%] sm:w-[57%] sm:h-[36rem] md:w-[50%] lg:w-[70%] lg:h-[31rem] xl:w-[60%] 2xl:w-[50%]"
            src={response.Poster}
            alt=""
          />
          <p className="my-2 text-white">Your Favourites Here!</p>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
