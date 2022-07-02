

import { useDispatch, useSelector } from "react-redux";
import { RecommendedMovies } from "../Redux/Movies/MoviesAction";
import { useState, useEffect } from 'react';
import Image from "../images.jpg";


function Banner(props) {
  const [movie, setMovie] = useState(0);

  useEffect(() => {
    var i = 0;
    var intervalR = setInterval(() => {
      if (i > 19)
        i = 0;
      if (Search)
        setMovie(i++);
    }, 3000);
    return () => clearInterval(intervalR);
  }, []);

  const Search = useSelector(state => state.Recommended.results);
  if (Search) {
    console.log(movie);
    var Images = 'http://image.tmdb.org/t/p/original/' + Search[movie].poster_path;
    var Title = Search[movie].title;
  }

  return (<div className="row d-flex justify-content-center">
    {Search &&
      <div className="d-flex justify-content-center align-items-end"
        style={{ backgroundImage: `url(${Images})`, height: `70vh`, backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }}
      >
        <div className=" text-white fs-2 bg-dark w-100 text-center opacity-75">{Title}</div>
      </div>
    }
  </div>);

}

export default Banner;