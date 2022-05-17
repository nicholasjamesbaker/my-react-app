import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export function Home(){
    return (
        <>
        <h1>Nick's Movie Reviews</h1>
        </>
    );
}

export function MovieList( {movies = [], onChangeMovies = f => f} ){
    //loop through and output all movies display

    if  ( movies == null || movies == undefined) 
        return <h2>No movies available</h2>;

    return (
        <>
        <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="#home">Nick's Movie Reviews</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
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