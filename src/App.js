import React, {useState, useEffect} from "react";
import './App.css';
import {MovieList, Home } from './pages';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <Routes>
    
      <Route path="/" element={<Home />}/>
      <Route path="/movies" element={<MovieList movies={movies} setMovies={setMovies}/>}/>
    </Routes>
    </>
  )
}

export default App;
