import Search from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers ,getSearch} from '../Redux/Action/action';
import SearchItem from './Search';


function Body() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    // var user=useSelector(state=>state.user);
  }, []);

  const user = useSelector(state => { if (state) return state.user; });
  console.log(user);
  return (
    <div className='h-[88vh] w-[80%] bg-black opacity-[.90] '>
      {user &&
      <>
        <div>
          {/* this div is for search box */}
          <div className='flex justify-between'>
            <div className='flex justify-center m-[0.5rem] ml-[1rem]  items-center rounded-full bg-white w-[19rem] h-[2.9rem]'>
            <Search className='text-black m-2'></Search>
            <input className='w-[85%] focus:outline-none  border-white' onChange={(oEvent)=>{dispatch(getSearch(oEvent.target.value));}} placeholder='Artist,songs, or podcasts'></input>
            </div>
            
          {/* this section is for user name and image */}
          <div className="flex justify-start m-[0.5rem] mr-[1rem] items-center w-[8rem]  rounded-full bg-black hover:bg-slate-800">
            <Avatar className='m-[0.2rem]' alt="GP" src={user.images[0].url} />
            <div className='text-center text-mono text-lg text-white font-bold ml-2'>
              {user.display_name}
            </div>

          </div>
          </div>
        </div>
        <SearchItem />
        </>
      }
    </div>
  )
}

export default Body;