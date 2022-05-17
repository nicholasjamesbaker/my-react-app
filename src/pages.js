import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export function Home(){
    return (
        <>
        <h1>Welcome to Nick's Movie Reviews!</h1>
        </>
    );
}

export function MovieList( {movies = [], onChangeMovies = f => f} ){
    //loop through and output all movies display

    if  ( movies == null || movies == undefined) 
        return <h2>No movies available</h2>;

    return (
        <>
        {   //jsx
            movies.map((movie, i) => {
                return (
                <>
                <img src={movie.poster} width="276" height="500"></img>
                <h2><b>{movie.name}</b></h2> 
                <h3>Release Date: {movie.date}</h3>
                <h3>Starring: {movie.actors.join(', ')} </h3>
                <h3>Rating: {movie.rating} out of 5</h3>
                </>
                )
            })
        }
        </>
    
    );
}