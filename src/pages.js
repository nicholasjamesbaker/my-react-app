import React from 'react';
import { useForm } from 'react-hook-form';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Home(){
    return (
        <div id="welcome">
        <b>Welcome to Nick's Movie Reviews!</b>
        <br></br>
        <img src={"images/film.jpg"} width="835" height="466"></img>
        </div>
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

// function handleSubmit(event) {
//     event.preventDefault();
  
//     const data = new FormData(event.target);
  
//     const value = data.get('movie_name');
  
//     console.log({ value });
// }

// const form = document.querySelector('form');
// form.addEventListener('submit', handleSubmit);

export function AddMovie() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  
  
  return (
      <>
      <container id="addmovie">
      <h1><b>Add a Movie Review</b></h1>
    <form name="myForm" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" id="name" placeholder="Movie name" {...register("name", {required: true, minLength: 1, maxLength: 80})} />
      <br></br>
      <input type="text" id="date" placeholder="Release date" {...register("date", {required: true, minLength: 1, maxLength: 100})} />
      <br></br>
      <input type="text" id="actors" placeholder="Actors" {...register("actors", {required: true, minLength: 1, maxLength: 100})} />
      <br></br>
      <select id="poster"{...register("poster", { required: true })}>
        <option value="Default">Placeholder Image</option>
        <option value="Up">Thumbs Up</option>
        <option value="Down">Thumbs Down</option>
      </select>
      <br></br>
      <input type="text" id="rating" placeholder="Rating" {...register("rating", {required: true, minLength: 1, maxLength: 1, })} />
      <br></br>
      <input type="submit" />
    </form>
    </container>
    </>
  );
}

