import React from 'react';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { RecommendedMovies } from "../Redux/Movies/MoviesAction";

function Paging1() {
  const [Search, setSearch] = useState(1);
  const dispatch = useDispatch();
  const onNext = () => {
    if (Search < 1000) {
      setSearch(Search + 1);
    }
  }
  const onPrev = () => {
    if (Search > 1) {
      setSearch(Search - 1);
    }
  }
  useEffect(() => {
    dispatch(RecommendedMovies('https://api.themoviedb.org/3/trending/movie/day?api_key=aa504f321bdef94d2599fd37a24f4e39&page=' + Search));

  }, [Search]);


  return (
    <div className='d-flex justify-content-center p-4 row '>
      <button type="button" onClick={onPrev} className=' col-md-2 col-5 fs-4 text-primary border border-primary border-1 border-end-0 rounded-pill rounded-end btn  btn-light'>Previous</button>
      <button type="button" className=" col-md-1 col-1 text-primary border border-primary border-1 rounded-0  btn btn-light">{Search}</button>
      <button type="button" onClick={onNext} className=" col-md-2 col-5 fs-4 text-primary border border-primary border-1 border-start-0 rounded-pill rounded-start btn btn-light">Next</button>
    </div>
  )
}

export default Paging1