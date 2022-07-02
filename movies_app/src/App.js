import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Banner from './component/Banner';
import NavBar from './component/NavBar';
import Movies from './component/Movies';
import Paging1 from './component/Paging1';
import Corosel from './component/Corosel';
import { Button, Col, Input, Row } from 'reactstrap'
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import Favourites from './component/Favourites';
import MovieDetail from './component/MovieDetail';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  const [data, setData] = useState();
  // useEffect(() => {
  //   fetch('https://api.themoviedb.org/3/trending/all/day?api_key=aa504f321bdef94d2599fd37a24f4e39')
  //     .then(
  //       (response) =>
  //         response.json()
  //     ).then((actualdata) => { console.log(actualdata); setData(actualdata); })
  // },
  //   []);
  return (
    <div className="App">
      <Provider store={Store}>
      <Router>
        <NavBar></NavBar>
        
          <Routes>
            <Route path="/" element={<><Banner></Banner>
              <Movies></Movies>
              <Paging1></Paging1></>}>
            </Route>
            <Route path="/favourites" element={<><Favourites /></>}>
            </Route>
            <Route path="/details/:id" element={<><MovieDetail /></>}>
            </Route>
          </Routes>
        </Router>

      </Provider>
    </div >

  );
}



export default App;
