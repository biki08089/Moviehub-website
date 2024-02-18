function Subdashboard({ res }) {
  const ratings = res.Ratings;
  console.log(ratings);

  return (
    <div>
      <div className="text-[1.2rem] text-[#47a5c5] mb-3">
        <p>Directed by : {res.Director}</p>
        <p>Genre : {res.Genre}</p>
        <p>Box office collection : {res.BoxOffice}</p>
        <p>Type : {res.Type}</p>
        <div className="mt-2">
          <p>Ratings:</p>
          <div>
            {ratings.map((eachRating) => {
              return (
                <p>
                  {eachRating.Source} : {eachRating.Value}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subdashboard;
