import { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Player from './Components/Player';
import { accessToken } from './credentials/token';
import SpotifyWebApi from "spotify-web-api-js";
import store from "./Redux/Store";
import { Provider } from 'react-redux';
import {useDispatch} from 'react-redux';
import { setToken } from './Redux/Action/action';


//const spotify=new SpotifyWebApi;


function App() {
  const [tokenS, setTokens] = useState();
  

  useEffect(() => {
    let token = accessToken();
    if (token.access_token)
      setTokens(token.access_token);
  }, []);
  return (

    <div className="App">
      <Provider store={store}>
        {tokenS ? <Player /> : <Login />}
      </Provider>
    </div>

  );
}

export default App;
