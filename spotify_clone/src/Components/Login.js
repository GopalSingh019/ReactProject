import axios from 'axios';
import React from 'react';
import { clientId, scopes, redirectURL } from '../credentials/client'

function Login() {


  var autEndpoind = 'https://accounts.spotify.com/authorize';
  var url = `${autEndpoind}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;


  return (
    <div>
      <div className={`bg-[url(https://hd2.tudocdn.net/733420?w=1900&h=975)] h-[100vh] w-[100vw] bg-cover bg-center relative`}>
        <a href={url} className='bg-lime-600 hover:bg-lime-800 font-bold p-1 text-white w-48 h-8 text-center rounded-3xl absolute top-[75%] right-[40%]'>Login With Spotify</a>
      </div>
    </div>
  )
}

export default Login