import {useState, useEffect} from "react";
// import logo from "./logo.svg";
import "./App.css";

import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

const apiKey = import.meta.env.VITE_OMDB_API_KEY;


export default function App() {
  // Constant with your API Key
  // const apiKey = "98e3fb1f";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async(searchTerm) => {
    // Make fetch request and store the response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // console.log(import.meta.env.VITE_OMDB_API_KEY);

    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setMovie(data);
  };

  // We pass the getMovie function as a prop called moviesearch
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay />
    </div>
  );
}