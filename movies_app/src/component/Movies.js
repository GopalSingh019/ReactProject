import React from 'react';
import Image from "../images.jpg";
import { useDispatch, useSelector } from "react-redux";
import { RecommendedMovies } from "../Redux/Movies/MoviesAction";
import { useState, useEffect } from 'react';
import { MovieDetails } from "../Redux/Movies/MoviesAction";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {Snackbar,Alert} from '@mui/material';

function Movies() {

    const dispatch = useDispatch();
    const [hoverFav, sethoverFav] = useState(null);
    const [Fav, setFav] = useState(null);
    const [success,setSuccess]=useState(false);

    // to store favourite movies

    const [favMovies, setFavMovies] = useState([]);

    useEffect(() => {
        let intialFavMov = localStorage.getItem("favMovies");
        if (intialFavMov !== "") {
            intialFavMov = JSON.parse(intialFavMov) || [];
            setFavMovies(intialFavMov);
        }
        dispatch(RecommendedMovies('https://api.themoviedb.org/3/trending/movie/day?api_key=aa504f321bdef94d2599fd37a24f4e39&page=1'));
    }, []);

    function onSetFav(movie) {
        var arrMovies = favMovies;
        arrMovies.push(movie);
        localStorage.setItem("favMovies", JSON.stringify(favMovies));
        setFavMovies(arrMovies);
        setSuccess({success:true});

    };

    function onRemoveFav(movie) {
        var arrMovies = favMovies;
        arrMovies = arrMovies.filter((m) => m.id !== movie.id);
        localStorage.setItem("favMovies", JSON.stringify(arrMovies));
        setFavMovies(arrMovies);
    };

    const Search = useSelector(state => state.Recommended.results);
    // console.log(Search);

    return (
        <div>
            <div className='text-center p-3 fs-1 fw-bolder text-dark '>Trending Movies</div>
            <div className='d-flex flex-wrap justify-content-center'>
                {Search && Search.map((movie, index) => {
                    Image = 'http://image.tmdb.org/t/p/original/' + movie.poster_path;
                    var path = "/details/" + movie.id;
                    return (
                        <div className='position-relative'>
                            <Link to={path} className=" position-relative d-flex justify-content-center align-items-end border border-primary rounded-3 m-5 bg-image zoom"
                                style={{ backgroundImage: `url(${Image})`, textDecoration: `none`, height: `30vh`, width: `250px`, backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }}
                                onMouseOver={() => sethoverFav(movie.id)} onMouseLeave={() => sethoverFav(null)}
                                on
                            >

                                <div className=" text-white text-Bolder fs-6 bg-dark w-100 text-center btn btn-">{movie.title}</div>
                            </Link>
                            {movie.id === hoverFav && <>
                                {!favMovies.find((moviek) => movie.id === moviek.id) && <button onClick={() => onSetFav(movie)} onMouseOver={() => sethoverFav(movie.id)} onMouseLeave={() => sethoverFav(null)} className='position-absolute  fs-3 bg-dark border-0 rounded-3' style={{ left: `80%`, top: `8%` }} data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Favourite">😍</button>
                                }
                                {favMovies.find((moviek) => movie.id === moviek.id) && <button onClick={() => onRemoveFav(movie)} onMouseOver={() => sethoverFav(movie.id)} onMouseLeave={() => sethoverFav(null)} className='position-absolute  fs-3 bg-dark border-0 rounded-3' style={{ left: `80%`, top: `8%` }} data-bs-toggle="tooltip" data-bs-placement="top" title="Remove From Favourite">❌</button>
                                }
                            </>

                            }
                            <Snackbar open={success} autoHideDuration={6000} onClose={()=>setSuccess(false)}>
                                <Alert onClose={()=>setSuccess(false)} severity="success" sx={{ width: '100%' }}>
                                    Added to Favourites!
                                </Alert>
                            </Snackbar></div>
                    );
                })
                }

            </div>

        </div>
    )
}

export default Movies