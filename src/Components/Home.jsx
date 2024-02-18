import { useNavigate } from "react-router-dom";
import fast from "../assets/fast.jpg";

function Home({ mysignup, setSignUp }) {
  const navigate = useNavigate();
  function signUpPage() {
    mysignup === "Sign up" ? navigate("/signup") : navigate("/dashboard");
  }

  return (

    <div className="home.js bg-[#000814] h-[65rem] justify-center lg:h-[52rem] lg:flex lg:w-[100%]">
      <div className="px-5 pt-4 sm:px-10 md:px-14 lg:w-[50%] lg:mt-[6rem] lg:pl-16">
        <h1 className="text-[2rem] font-semibold text-[white] ">First & Furious 7</h1>
        <p className="text-[1.3rem] text-[white] font-semibold ">
          The Fast and the Furious (2001) PG-13 | 106 min | Action, Crime,
          Thriller 6.8 Rate 58 Metascore.
          <br />
          <span className="text-[#47a5c5]">
            Vin Diesel, Paul Walker, Dwayne Johnson.
          </span>
        </p>
        <p className="text-[white] text-[1.1rem] ">
          Dominic and his crew thought they'd left the criminal mercenary life
          behind. They'd defeated international terrorist Owen Shaw and went
          their separate ways. But now, Shaw's brother, Deckard Shaw, is out
          killing the crew one by one for revenge. Worse, a Somalian.....
        </p>
        <br />
        <p className="text-[white]">Want to explore more</p>
        <button className="px-5 py-2 my-3 bg-[#ffd60a] rounded-md font-semibold"
          onClick={signUpPage}>
          {mysignup}
        </button>
      </div>


      <div className="flex flex-col items-center justify-center mt-4 lg:w-[50%]">
        <img
          className="w-[70%] h-[30rem] rounded-md sm:w-[50%] sm:h-[36rem] md:w-[43%] md:h-[36rem] mb-3 lg:w-[65%] lg:h-[32rem] xl:w-[55%] 2xl:w-[50%] 2xl:h-[34rem]"
          src={fast}
          alt=""
        />
        <p className=" text-white sm:my-5">Your Favourites Here!</p>
      </div>
    </div>

  );
}

export default Home;
