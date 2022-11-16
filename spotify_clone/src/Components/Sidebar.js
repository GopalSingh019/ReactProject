import React from 'react';
import Sidebaroption from './Sidebaroption';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import HomeIcon from '@mui/icons-material/Home';

function Sidebar() {
  return (
    <div className='h-[88vh] w-[40%] md:w-[20%] bg-black flex flex-col'>
      <div className='flex justify-center item-center '>
        <img src='https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg' className='h-[4rem] w-[80%] object-fill'></img>
      </div>
      <Sidebaroption Icon={HomeIcon} option="Home"></Sidebaroption>
      <Sidebaroption Icon={SearchIcon} option="Search"></Sidebaroption>
      <Sidebaroption Icon={LibraryMusicIcon} option="Your Library"></Sidebaroption>
    </div>
  )
}

export default Sidebar