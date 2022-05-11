import React from "react";
import './App.css';
import panther from "./panther.png"

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

const dishes = [
  "Sauteed Beast",
  "Steak",
  "Seared Bison"
];

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));

function App() {
  return (
    <div className="App">
      <Header name="Nick"/>
      <Main dishes={dishObjects} adjective="Delicious"/>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
