import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { MovieDetails } from "../Redux/Movies/MoviesAction"

function MovieDetail() {
    let { id } = useParams();//to get id from url
    const movieDetail = useSelector(state => state.MovieDetail);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(MovieDetails('https://api.themoviedb.org/3/movie/' + id + '?api_key=aa504f321bdef94d2599fd37a24f4e39&append_to_response=credits'));
    }, [id]);
    console.log(movieDetail);
    let Image = "http://image.tmdb.org/t/p/original/" + movieDetail.poster_path;
    return (<div className='row'>
        <div className='bg-image d-flex justify-content-center align-items-center overflow-hidden'
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(http://image.tmdb.org/t/p/original/${movieDetail.backdrop_path})`, height: '89vh', backgroundSize: `cover`, backgroundPosition: `center`, backgroundRepeat: `no-repeat` }}>

            <div className='m-4 '>
                <img src={Image} style={{ height: `30rem` }} className="w-100 border rounded-3 border-1 border-dark"></img>
            </div>
            <div className='  w-50 overflow-auto d-md-flex flex-column justify-content-center ' style={{height:`100%`}}>
                <div className=' text-white text-bolder w-100 h1' >{movieDetail.original_title}</div>
                <div className='w-100'>
                    {movieDetail.genres && movieDetail.genres.map((item) => {
                        return (<button className=' m-2 btn btn-pill text-white text-bold border rounded-pill border-2 border-white'>{item.name}</button>);
                    })}
                </div>
                <div className='text-break h-3  text-white'>{movieDetail.overview}</div>
                <div className='w-100 h-2 text-white'>Casts</div>
                <div className='d-flex flex-row overflow-auto scroll'>
                    {movieDetail.credits && movieDetail.credits.cast.map((item, key) => {
                        Image = "http://image.tmdb.org/t/p/original/" + item.profile_path;
                        if (key < 8 && item.profile_path !== "")
                            return (
                                <div className='d-flex align-items-start flex-column'>
                                    <div className="d-flex justify-content-center align-items-end border-1 border-dark rounded-3 me-md-1 bg-image"
                                        style={{ backgroundImage: `url(${Image})`, height: `18vh`, width: `90px`, backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }}
                                    ></div>
                                    <div style={{ width: `90px`, font: `2rem`, height: `4rem` }} className=" text-white bg-dark text-wrap  text-center">{item.name}</div>

                                </div>);
                        else return <div></div>;
                    })}
                </div>
            </div>

        </div>
    </div>
    )
}

export default MovieDetail