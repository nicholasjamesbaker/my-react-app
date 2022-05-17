import React, {useState, useEffect} from "react";
import './styles.css';
import {MovieList, Home } from './pages';
import NavBar from "./NavBar";
import {Router, Route, Routes} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

// https://api.github.com/users/nicholasjamesbaker

function App(){
  
  const [movies, setMovies] = useState(null);

  useEffect( () =>{

    //load json data
    fetch("./movies.json")
    .then ( response => response.json() )
    .then ( setMovies )
    .then ( console.log(movies))
    .catch (e => console.log(e.message) );
  }, [])

  return (
    <>
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/movies" element={<MovieList movies={movies} setMovies={setMovies}/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App;
