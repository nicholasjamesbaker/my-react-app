import React, {useState, useEffect} from "react";
import './App.css';
import panther from "./panther.png"
import { MovieList } from './pages';

// https://api.github.com/users/nicholasjamesbaker

function Header(props){
  console.log(props);
  return(
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

function Main(props){
  return(
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <img src={panther}></img>
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props){
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

function SecretComponent(){
  return (
    <h1>This is a secret component.</h1>
  );
}

function RegularComponent(){
  return (
    <h1>This is a regular component.</h1>
  );
}

const dishes = [
  "Sauteed Beast",
  "Steak",
  "Seared Bison"
];

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));

function App(){
  // let movies = {};
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
    <MovieList movies={movies} setMovies={setMovies}/>
    </>
  )
}

// function App({login}) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!login) return;
//     setLoading(true);
//     fetch(`https://api.github.com/users/${login}`)
//     .then((response) => response.json())
//     .then(setData)
//     .then(() => setLoading(false))
//     .catch(setError);
//   }, [login])

//   if (loading) return <h1>Loading...</h1>;
//   if (error)
//   return <pre>{JSON.stringify(error, null, 2)}</pre>;
//   if (!data) return null;

//   return (
//       <div>
//         <h1>{data.name}</h1>
//         <p>{data.location}</p>
//         <img alt={data.login} src={data.avatar_url} />
//         </div>
//     );
//   }

// function App(){
//   const [emotion, setEmotion] = useState("happy");
//   const [secondary, setSecondary] = useState("tired");

//   useEffect(() => {
//     console.log(emotion)
//   }, [emotion]);

//   useEffect(() => {
//     console.log(secondary)
//   }, [secondary]);

//   return (
//     <>
//     <h1>Current emotion is {emotion} and {secondary}.</h1>
//     <button onClick={() => setEmotion("happy")}>
//       Happy
//     </button>
//     <button onClick={() => setSecondary("beast")}>
//       Beast
//     </button>
//     <button onClick={() => setEmotion("frustrated")}>
//       Frustrate
//     </button>
//     <button onClick={() => setEmotion("enthusiastic")}>
//       Enthuse
//     </button>
//     </>
//   );
// }

// function App({secret}){
//   return (
//     <>
//     {secret ? <SecretComponent/> : <RegularComponent/>}
//     </>
//   )
// }

// function App() {
//   return (
//     <div className="App">
//       <Header name="Nick"/>
//       <Main dishes={dishObjects} adjective="Delicious"/>
//       <Footer year={new Date().getFullYear()} />
//     </div>
//   );
// }

export default App;
