import React, { useEffect } from 'react';
import { Slider, Grid } from '@mui/material';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { useDispatch, useSelector } from 'react-redux';
import { currentPlaying } from '../Redux/Action/action';

function Footer() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentPlaying());
  }, []);


  let Playing = useSelector(state => { if (state && state.currentPlaying !== 1) return state.currentPlaying; });
  console.log(Playing);

  return (
    <div className='bg-gradient-to-b from-slate-300 to-slate-800  h-[12vh] flex'>
      {Playing &&
        <>
          <div className="w-1/4 flex justify-start items-center">
            {/* <div className='flex items-center w-[50%]'> */}
              <img className='object-cover w-[48px] h-[48px] ml-4 mr-2' src={Playing.item.album.images[0].url} />
            {/* </div> */}
            <div className='flex flex-col items-start justify-center '>
              <text className='font-serif text-sm text-white truncate w-[12rem] '>{Playing.item.name}</text>
              <text className='text-xs text-slate-300 truncate w-[12rem]'>
                {Playing.item.artists.map((item, key) => {
                  if (key > 0)
                    return "," + item.name;
                  return item.name;
                })
                }</text>
            </div>
          </div>
          <div className="w-1/2 flex justify-center flex-col items-center">
            <div className='flex items-center text-5xl text-zinc-50 text-lg h-[60%] transition'>
              <Grid container spacing={2}>
                <Grid item ><ShuffleIcon className='text-lime-800 hover:scale-150' /></Grid>
                <Grid item ><SkipPreviousIcon className='hover:scale-150' /></Grid>
                <Grid item ><PlayCircleOutlineIcon className='hover:scale-150' /></Grid>
                <Grid item ><SkipNextIcon className='hover:scale-150' /></Grid>
                <Grid item ><RepeatIcon className='text-lime-800 hover:scale-150' /></Grid>
              </Grid>
            </div>
            <div className='w-[80%] flex justify-center'>
              <Slider value={Playing.progress_ms} max={Playing.item.duration_ms} className="" />
            </div>
          </div>
          <div className="w-1/4 flex justify-end items-center">
            <div className="w-1/2 flex justify-end">
              <Grid container spacing={2}>
                <Grid item><PlaylistPlayIcon className='text-white' /></Grid>
                <Grid item><VolumeUpIcon className='text-white' /></Grid>
                <Grid item xs={4} ><Slider className='text-white' /></Grid>
              </Grid>
            </div>
          </div></>
      }
    </div >
  )
}

export default Footer