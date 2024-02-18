function NotFound() {
  function refresh(){
    // window.location.reload();
    // alternate way
    history.go(0)
  }
  return (
    <div className="h-[100vh]  flex justify-center items-center flex-col">
      <p className="text-center text-white text-[1.3rem]">Data not found !</p>
      <button onClick={refresh} className="font-semibold rounded-md mt-2 px-5 py-2 bg-[#ffd60a]">Go Back</button>
      {/* <input type="submit" value={"Go Back"} className="text-white"></input> */}
    </div>
  );
}

export default NotFound;
