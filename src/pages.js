import React from 'react';

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
                <h2>{movie.name}</h2> 
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