import logo from './logo.svg';
import './App.css';
import { APIKEY } from './env';
import { useState, useEffect } from 'react'
import Movies from './components/Movies/Movies'
import SearchField from './components/SearchField/SearchField';

function App() {
  let [searchField, setSearchField] = useState("")
  const URL = 'https://api.kinopoisk.dev/v1.4/movie/search?query='

  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(URL + searchField, {
        headers: {
          'X-API-KEY': APIKEY
        }
      })
      const data = await res.json()
      setMovies(data.docs)
    }

    fetchMovies()
  }, [URL, searchField])

  let timer;
  function handleChange(event) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      setSearchField(event.target.value);
    }, 1000)
  }

  return (
    <div className="App">
      <header className="App-header">
      {
      loading ? <h1>Загрузка</h1> :
      error ? <h1>Что-то пошло не так</h1> :
      <Movies movies={movies} />
      }
        <SearchField value={searchField} onChange={handleChange} />
      </header>
    </div>
  );
}

export default App;
