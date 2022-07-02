import React, { useEffect } from 'react'
import {useState} from 'react'

function Favourites() {

  let genresId = {28: 'Action',
    12: 'Adventure',
    16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History',
    27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western'
  };
  const [currGenre, setCurrGenre] = useState("All Genres");
  const [search, setSearch] = useState("");
  const [favMovies,setFavMovies] = useState([]);
  const [genres,setGeneres]=useState([]);
  const [rating,setRating]=useState(0);
  const [popularity,setPopularity]=useState(0);

  // get all fav movies
  useEffect(()=>{
    let favArray=JSON.parse(localStorage.getItem("favMovies")) || [];
    setFavMovies([...favArray]);
    console.log(favMovies);
  },[]);

  //get all genres
  useEffect(()=>{
    let temp=favMovies.map((movie)=>genresId[movie.genre_ids[0]]);
    temp=new Set(temp);
    setGeneres(["All Genres",...temp]);
  },[favMovies]);

  useEffect(()=>{
    if(rating === 1){
      let arrMovies=favMovies;
      arrMovies.sort((a,b)=>a.vote_average-b.vote_average);
      setFavMovies(arrMovies);
    }
    else if(rating === -1){
      let arrMovies=favMovies;
      arrMovies.sort((a,b)=>b.vote_average-a.vote_average);
      setFavMovies(arrMovies);
    }
  },[rating]);

  useEffect(()=>{
    if(popularity === 1){
      let arrMovies=favMovies;
      arrMovies.sort((a,b)=>a.popularity-b.popularity);
      setFavMovies(arrMovies);
    }
    else if(popularity === -1){
      let arrMovies=favMovies;
      arrMovies.sort((a,b)=>b.popularity-a.popularity);
      setFavMovies(arrMovies);
    }
  },[popularity]);

  function onDel(movie){
    let arrMovies=favMovies;
    arrMovies=arrMovies.filter((movies)=>movies.id!==movie.id);
    localStorage.setItem("favMovies",JSON.stringify([...arrMovies]));
    setFavMovies([...arrMovies]);
  }

   
 let filteredMov = currGenre==="All Genres" ? favMovies : favMovies.filter((m)=>genresId[m.genre_ids[0]]==currGenre) ;
 

 
  
 filteredMov = search==="" ? filteredMov : filteredMov.filter((m)=>m.title.toLowerCase().includes(search.toLowerCase())) ;
 
  
  

  return (
    <div>
      <div className='d-flex justify-content-center m-5'>
        {genres.map((genre) => {
          return (<div onClick={()=>{setCurrGenre(genre);setSearch("");}} className={(currGenre === genre) ? 'btn btn-primary rounded-3 pd-md-3 h-3 text-white m-md-3 m-1' : 'btn m-1 pd-md-3 h-3 btn-secondary rounded-3 text-white m-md-3'}>{genre}</div>);
        })
        }
      </div>
      <div className='d-flex justify-content-center flex-row'>
        <input type={'text'} value={search} className='m-md-3 h-4 text-center ' placeholder='Search' onChange={(e)=>{setSearch(e.target.value);currGenre("All Genres")}}></input>
        <input type={'number'} className='m-md-3 h-4 text-center ' placeholder='Rows'></input>
      </div>
      <div className='m-5 h-4 overflow-auto row'>
        <table class="table col-12">
          <thead className='bg-secondary'>
            <tr>
              <th scope="col">#</th>
              <th scope="col">NAME</th>
              <th scope="col" className=' d-flex flex-row'><div >
                <img onClick={()=>{setRating(-1);setPopularity(0);}} className=' btn' src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png'>
                </img>
                Rating
                <img onClick={()=>{setRating(1);setPopularity(0);}} className=' btn' src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png'>
                  </img></div>
              </th>
              <th scope="col" className='text-center'><div >
                <img onClick={()=>{setPopularity(-1);setRating(0);}} className='me-2 btn' src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png'>
                </img>
                popularity
                <img onClick={()=>{setPopularity(1);setRating(0);}} className='ms-2 btn' src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png'>
                  </img></div>
              </th>
              <th scope="col">Genre</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {filteredMov.length>0 && filteredMov.map((movie,key)=>{
            return (<tr>
              <th scope="row">{key}</th>
              <td><div>
                <div><img src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} style={{height:`10rem`}}></img></div>
                <div>{movie.title}</div></div>
                </td>
              <td className='text-center'>{movie.vote_average}</td>
              <td className='text-center'>{movie.popularity}</td>
              <td ><div className='mt-3'>{movie.genre_ids.map((genreid)=><span className='bg-info p-2 rounded-3 me-1 fs-5'>{genresId[genreid]}</span>)}</div></td>
              <td><div onClick={()=>{onDel(movie);}} className='text-danger btn fs-3'>Delete</div></td>
            </tr>);
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Favourites