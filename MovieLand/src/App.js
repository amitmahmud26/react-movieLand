import React, { useEffect, useState } from 'react';
import SearchIcon from './search.svg'
import './App.css';
import MovieCard from './component/MovieCard.jsx';

// 547433ca

const API_URL = 'https://www.omdbapi.com/?apikey=547433ca'
const movie = {
  "Title": "Spiderman",
  "Year": "2010",
  "imdbID": "tt1785572",
  "Type": "movie",
  "Poster": "N/A"
}
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const movieSearch = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    movieSearch('Spiderman');
  }, [])
  
  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
        placeholder='Search for movies'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => movieSearch(searchTerm)}
        />
      </div>

      {
         ( movies?.length > 0)
            ? 
              <div className="container">
                {movies.map((movie) => (
                    <MovieCard movie={movie}/>
                  ))
                }
              </div>
              : 
              <div className="empty">
                <h2>Movies Not Found</h2>
              </div>
        }
    </div>
  );
}

export default App;
