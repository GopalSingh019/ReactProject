import { Nav,NavItem,NavLink } from 'reactstrap';
import {useDispatch,useSelector} from "react-redux";
import {RecommendedMovies} from "../Redux/Movies/MoviesAction";
import {useState,useEffect} from 'react'
import {Link,BrowserRouter as Router} from 'react-router-dom'

function NavBar() {

    
    return (<div className='w-100vw'>
        
        <div className=' d-flex align-items-center bg-white border border-1 border-primary row flex-wrap ps-3'>
            <img className='col-3 col-lg-1 p-1 ms-2' style={{'height':'90px'}}  src="https://static.vecteezy.com/system/resources/previews/004/819/405/original/video-camera-movie-icon-isolated-flat-design-vector.jpg"/>
            <Link to="/" style={{textDecoration:`none`}}  className='h1 text-info  col-3  p-1 text-center border-0 border-white'>Movies</Link>
            <Link  to="/favourites" style={{textDecoration:`none`}} className='h1 text-info col-4  p-1 text-center  border-0 border-white'>Favourites</Link>
        </div>
        
    </div>);
}



export default NavBar;