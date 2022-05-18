import React, { useState } from 'react';
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

export function MoviePage({movies, setMovies}) {
  return (
      <>
          <h1><b>Nick's Movie Reviews</b></h1>
          <MovieList movies={movies} onRemoveMovie = {
                  movieName => {const newMovies = movies.filter(movie => movie.name !== movieName);
                    setMovies(newMovies);}}/>
      </>
  );
}

export function MovieList( { movies = [], onRemoveMovie = f => f}) {
  if  ( movies == null || movies == undefined) 
        return <h2>No movies available</h2>;

  return (
      <div>
          {movies.map( movie => {
              return <Movie key={movie.name} {...movie} onRemove={onRemoveMovie} />
      })}
      </div>
  );
}

export function Movie({name, date, actors, poster, rating, onRemove = f => f}) {
  return (
    <>
    <br></br>
    <img src={poster} width="276" height="500"></img>
    <h2><b>{name}</b></h2> 
    <h3>Release Date: {date}</h3>
    <h3>Starring: {actors.join(', ')} </h3>
    <h3>Rating: {rating} out of 5</h3>
    <button onClick={() => onRemove(name)}>Remove movie</button>
    <br></br>
    </>
  )
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
  let json_data = ["test"];
  // name, date, actors, poster, rating
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [actors, setActors] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");

  // const [json_data, set_json] = useState("test");
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data.name);
    if (data.poster == "Default"){
      data.poster = "images/poster-placeholder.png";
    }
    else if (data.poster == "Up"){
      data.poster = "images/thumbs_up.png"
    }
    else{
      data.poster = "images/thumbs_down.png"
    }

    
    console.log(data.poster);
    json_data = JSON.stringify(data);
    console.log("Json Data");
    console.log(json_data);
  }

  return (
      <>
      <container id="addmovie">
      <h1><b>Add a Movie Review</b></h1>
    <form name="myForm" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" 
      id="name" 
      onSubmit={e => setName(e.target.value)} 
      placeholder="Movie name" {...register("name", {required: true, minLength: 1, maxLength: 80})} />
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
    <br></br>
    <div>
      <h1><b>Added Movies</b></h1>
      <h2>Movie name: {name}</h2>
    </div>
    </container>
    
    </>
  );
}

